import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcustomerPage } from './newcustomer';

@NgModule({
  declarations: [
    NewcustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcustomerPage),
  ],
})
export class NewcustomerPageModule {}
