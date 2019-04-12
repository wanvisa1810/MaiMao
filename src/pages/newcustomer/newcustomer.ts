import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//HttpClient
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

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
    customerID:"",
    customerName:"",
    customerTel:"",
    customerMail:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcustomerPage');
  }
  addCustomer(){
    let url="http://localhost:8080/customer";
    console.log(this.customer);
    this.http.post(url, this.customer)
      .subscribe(
        res=>{
            this.data = res;
            if(this.data.msg==true){
              this.showAlert("Success","Data added");
              this.navCtrl.popToRoot();
            }
        }
      ); 
  }
  showAlert(msgTitle:string,message:string){
    const alert = this.alertCtrl.create({
      title: msgTitle,
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }
}
