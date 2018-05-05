import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewGalleryPage } from './view-gallery';

@NgModule({
  declarations: [
    ViewGalleryPage,

  ],
  imports: [
    IonicPageModule.forChild(ViewGalleryPage),
  ],
  entryComponents: [
    ViewGalleryPage
  ]
})
export class ViewGalleryPageModule {}
