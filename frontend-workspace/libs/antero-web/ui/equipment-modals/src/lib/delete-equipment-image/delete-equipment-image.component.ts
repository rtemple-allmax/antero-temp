import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentImage } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-equipment-image',
  templateUrl: './delete-equipment-image.component.html',
  styleUrls: ['./delete-equipment-image.component.scss'],
})
export class DeleteEquipmentImageComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public selectedImage: Nullable<ImageData>;

  public get text(): string {
    return `Are you sure you want to continue with deleting the selected image?`;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selectedImage$.subscribe(x => this.selectedImage = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async confirmHandler(): Promise<void> {
    if (this.selectedImage) {
      const result = await this.ctrl.deleteImage(this.selectedImage.sharedID);
      if (result) {
        this.appStore.refresh = true;
        this.antero.closeModal();
      }
    }
  }

  public cancelHandler() {
    this.antero.closeModal();
  }
}
