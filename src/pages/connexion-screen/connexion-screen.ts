import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';

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

  toCloudQuestion(){
    this.navCtrl.push(ChooseChapterCloudPage);
  }

  toCloudGame(){
    this.navCtrl.push(ElementChoiceCloudPage);
  }

}
