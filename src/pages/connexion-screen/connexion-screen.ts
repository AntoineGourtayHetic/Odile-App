import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ConnexionScreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connexion-screen',
  templateUrl: 'connexion-screen.html'
})
export class ConnexionScreenPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConnexionScreenPage Page');
  }

}
