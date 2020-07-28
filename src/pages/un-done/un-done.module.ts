import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnDonePage } from './un-done';

@NgModule({
  declarations: [
    UnDonePage,
  ],
  imports: [
    IonicPageModule.forChild(UnDonePage),
  ],
})
export class UnDonePageModule {}
