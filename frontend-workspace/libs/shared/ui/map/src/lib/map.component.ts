import { NavigationService } from '@allmax-angular/shared/services';
import { GeoPoint, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';

export interface MapEventArgs {
  component: MapComponent;
  point: Nullable<GeoPoint>;
}

export enum MapInteractionModes {
  SET_LOCATION,
  NORMAL
}

@Component({
  selector: 'amx-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container') public containerRef: Nullable<ElementRef>;

  @Input() public showToolbar = true;
  @Input() public mapDOMID = 'map';
  @Input() public height = '100%';

  @Output() public clicked = new EventEmitter<MapEventArgs>();
  @Output() public cleared = new EventEmitter<MapEventArgs>();

  public map: Nullable<leaflet.Map>;
  private markerLayer: leaflet.Layer | undefined;

  private key = 'VrAk5hlL10w6dYpTjcZH';

  private minZoom = 1;
  private maxZoom = 20;
  private roadBaseLayer: leaflet.TileLayer | undefined;
  private satelliteBaseLayer: leaflet.TileLayer | undefined;
  private mapTilerAttribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  private mapTilerPathBasic = '';
  private mapTilerPathHybrid = '';
  public baseLayerName = 'road';
  public interactionMode: MapInteractionModes = MapInteractionModes.NORMAL;
  public interactionModes: typeof MapInteractionModes = MapInteractionModes;

  public icons = { ...allIcons };

  public get mapHeight(): string {
    return this.showToolbar ? 'calc(100% - 48px)' : '100%';
  }

  constructor(private nav: NavigationService) { }

  public ngOnInit(): void {
    this.mapTilerPathBasic = `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${this.key}`;
    this.mapTilerPathHybrid = `https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${this.key}`;
    this.createRoadlayer();
    this.createSatelliteLayer();
  }

  public ngAfterViewInit(): void {
    this.map = this.createMap();  
  }
  
  public ngOnDestroy(): void {
    if (this.map) {
      this.map.removeEventListener('click', this.mapClickHandler);
    }
  }

  public createMap(): leaflet.Map {
    const map: leaflet.Map = leaflet.map(this.containerRef?.nativeElement);
    map.attributionControl.setPrefix('<a href="http://www.leafletjs.com" target="_blank">Leaflet</a>');
    map.setView([ 37, -96 ], 5);
    map.addEventListener('click', this.mapClickHandler);
    const iconRetinaUrl = 'assets/icons/iconMapPin_blue.svg';
    const iconUrl = 'assets/icons/iconMapPin_blue.svg';
    const iconDefault = leaflet.icon({
      iconRetinaUrl,
      iconUrl,
      iconSize: [35, 41],
      iconAnchor: [15, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    leaflet.Marker.prototype.options.icon = iconDefault;
    setTimeout(() => map.invalidateSize(), 0);
    this.map = map;
    this.addBaseLayer(map)
    return map;
  }

  private createRoadlayer(): void {
    const roadLayer = leaflet.tileLayer(
      this.mapTilerPathBasic,
      this.layerOptions(this.mapTilerAttribution)
    );

    this.roadBaseLayer = roadLayer;
  }

  private createSatelliteLayer(): void {
    const satelliteLayer = leaflet.tileLayer(
      this.mapTilerPathHybrid,
      this.layerOptions(this.mapTilerAttribution)
    );
    this.satelliteBaseLayer = satelliteLayer;
  }

  public changeBaseLayer(): void {
    if (this.roadBaseLayer && this.satelliteBaseLayer && this.map) {
      if (this.map.hasLayer(this.satelliteBaseLayer)) {
        this.map.removeLayer(this.satelliteBaseLayer);
      }
      if (this.map.hasLayer(this.roadBaseLayer)) {
        this.map.removeLayer(this.roadBaseLayer);
      }
  
      this.baseLayerName = this.baseLayerName === 'road' ? 'satellite' : 'road';
  
      this.addBaseLayer(this.map);
    }
    
  }

  public addBaseLayer(map: leaflet.Map): void {
    if (this.baseLayerName === 'satellite') {
      if (!this.satelliteBaseLayer) {
        console.log(`Attempting to add the Satellite base layer, which doesn't exist, to the map.`);
      } else {
        map.addLayer(this.satelliteBaseLayer);
      }
    } else {
      if (!this.roadBaseLayer) {
        console.log(`Attempting to add the Road base layer, which doesn't exist, to the map.`);
      } else {
        map.addLayer(this.roadBaseLayer);
      }
    }
    
  }

  public mapClickHandler = (event: leaflet.LeafletEvent): void => {
    if (this.interactionMode === MapInteractionModes.SET_LOCATION) {
      const coords = (event as any).latlng;
      const point: GeoPoint = { latitude: coords.lat, longitude: coords.lng };
      this.clicked.emit({ component: this, point })
    }
  }

  public addMarkerAt(point: GeoPoint, popupContent: string): void {
    if (!this.map || !point) { return; }
    this.clearMarkers();
    const marker = leaflet.marker(leaflet.latLng(point.latitude, point.longitude))
    console.log('popupString', popupContent)
    // marker.bindPopup(popupContent).openPopup();
    this.markerLayer = marker.addTo(this.map);
  }

  public clearLocation(): void {
    this.cleared.emit({ component: this, point: null });
  }

  public showInMapping(): void {
    this.nav.navigate([ 'mapping' ])
  }

  public clearMarkers(): void {
    this.interactionMode = MapInteractionModes.NORMAL;
    if (this.map && this.markerLayer) {
      this.map.removeLayer(this.markerLayer);
    }
  }

  public switchInteractionMode(mode: MapInteractionModes): void {
    this.interactionMode = mode;
  }

  private layerOptions(attribution?: string ): any {
    return {
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      attribution: attribution || '',
      crossOrigin: true,
      dragging: true,
      trackResize: true,
      updateWhenIdle: true,
      updateWhenZooming: false,
      useCache: true
    };
  }
}
