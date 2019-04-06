import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the NewcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcustomer',
  templateUrl: 'newcustomer.html',
})
export class NewcustomerPage {
  customer = {
    customerName:"",
    customerTel:"",
    customerMail:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcustomerPage');
  }
  addCustomer(){
    let url="http://localhost:8080/customer";

    this.http.post(url,this.customer,{}).then(data=>{
      console.log(data.data.msg);
    });
    
  }
}
