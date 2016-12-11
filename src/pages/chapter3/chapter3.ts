import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Chapter3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html'
})
export class Chapter3Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Chapter3Page Page');
  }

}
