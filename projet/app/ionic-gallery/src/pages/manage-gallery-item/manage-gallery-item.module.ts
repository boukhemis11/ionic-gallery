import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageGalleryItemPage } from './manage-gallery-item';

@NgModule({
  declarations: [
    ManageGalleryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageGalleryItemPage),
  ],
})
export class ManageGalleryItemPageModule {}
