import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ElementChoiceGroundPage } from '../element-choice-ground/element-choice-ground';

/*
  Generated class for the ChooseChapterGround page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-chapter-ground',
  templateUrl: 'choose-chapter-ground.html'
})
export class ChooseChapterGroundPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChooseChapterGroundPage Page');
  }

  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);
    let clicked = false;
    let completed = false;

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");
    clicked = true;
    completed = true;
    //Laisser le temps à l'animation de se faire
    setTimeout(this.pushPage(), 1200);
  }

  pushPage(){
    this.navCtrl.push(ElementChoiceGroundPage);
  }

}
