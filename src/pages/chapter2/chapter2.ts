import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Chapter2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html'
})
export class Chapter2Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Chapter2Page Page');
  }

}
