import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';

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

  constructor(public navCtrl: NavController) {

  }

  /*Open a new page*/
  nextPage(){
    this.navCtrl.push(HomePagePage);
  }

  /*Open a new page*/

  toCloudChapter(){
    this.navCtrl.push(ChooseChapterCloudPage);
  }

}
