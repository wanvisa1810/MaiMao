import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  customer:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    let customerID=this.navParams.get('keyword');
    let url = "http://localhost:8080/customer/name/" + customerID;
    console.log(url)
    this.http.get(url).map(res => res.json()).subscribe(data => {this.customer = data});
  }
  showDetail(id)
  {
    this.navCtrl.push(DetailPage,{customerID:id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
