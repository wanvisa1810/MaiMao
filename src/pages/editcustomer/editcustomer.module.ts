import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditcustomerPage } from './editcustomer';

@NgModule({
  declarations: [
    EditcustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(EditcustomerPage),
  ],
})
export class EditcustomerPageModule {}