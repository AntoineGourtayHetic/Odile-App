import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TestTelephone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-telephone',
  templateUrl: 'test-telephone.html'
})
export class TestTelephonePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TestTelephonePage Page');
  }

}
