import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
//import { ResultPage } from '../result/result';
import { NewcustomerPage } from '../newcustomer/newcustomer';


import{ Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  customer:any=0;
  data:any;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http, private alertCtrl:AlertController){
    this.getData();
  }
  showDetail(id){
    this.navCtrl.push(DetailPage,{customerID: id});
  }
  showNewcustomer(){
    this.navCtrl.push(NewcustomerPage);
  }
  getData(){
    this.http.get("http://localhost:8080/customer")
    .map(res=>res.json())
    .subscribe(data=>{
    this.customer = data;
  }
    )}; 
  ionViewWllEnter(){
  this.getData();
  }

  deleteData(customerID)
  {
    this.alertCtrl.create({
      title:"Confirm",
      subTitle: "Confirm deleted",
      buttons: [
        { 
        text: "Yes",
        handler:()=>{
          let url= "http://localhost:8080/customer/" + customerID;
          this.http.delete(url)
         .subscribe(res=>{
          this.data=res;
          console.log(this.data);
          this.showAlert("Success","Data deleted");
          this.getData();
        });
      }
    },
        {
          text: "No",
          handler:()=>{}
        }
      ]
    })
    .present();
    let url= "http://localhost:8080/customer/" + customerID;
     this.http.delete(url)
    .subscribe(res=>{
      this.data=res;
      console.log(this.data);
      this.showAlert("Success","Data deleted");
      this.getData();
    });
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
