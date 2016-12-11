import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LoadingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading-page',
  templateUrl: 'loading-page.html'
})
export class LoadingPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LoadingPagePage Page');
  }

}
