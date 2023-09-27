import { ImageData } from '@allmax-angular/antero-web/types';
import { FetchService } from '@allmax-angular/shared/services';
import { Nullable } from '@allmax-angular/shared/types';
import { Injectable } from '@angular/core';

enum Endpoints {
  IMAGE_THUMBNAIL_GET_ONE = '/image/*/thumbnail',
  IMAGE_GET_ONE = '/image/*',
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private fetch: FetchService) { }

  public async hydrateImage(data: ImageData): Promise<Nullable<ImageData>> {
    if (data) {
        const t = await this.fetch.getAsBlob(Endpoints.IMAGE_THUMBNAIL_GET_ONE.replace('*', data.imageID.toString()));
        const i = await this.fetch.getAsBlob(Endpoints.IMAGE_GET_ONE.replace('*', data.imageID.toString()));

        if (t) {
          data.thumbnailUrl = URL.createObjectURL(t);
        } else {
          data.thumbnailUrl = null;
        }
        
        if (i) {
          data.imageUrl = URL.createObjectURL(i);
        } else {
          data.imageUrl = null;
        }
        data.hydrated = true;
        return data;
    }
    return null;
  }
}