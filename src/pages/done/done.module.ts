import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonePage } from './done';

@NgModule({
  declarations: [
    DonePage,
  ],
  imports: [
    IonicPageModule.forChild(DonePage),
  ],
})
export class DonePageModule {}
