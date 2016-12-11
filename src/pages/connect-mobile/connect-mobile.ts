import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ConnectMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connect-mobile',
  templateUrl: 'connect-mobile.html'
})
export class ConnectMobilePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConnectMobilePage Page');
  }

}
