import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Chapter1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html'
})
export class Chapter1Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Chapter1Page Page');
  }

}
