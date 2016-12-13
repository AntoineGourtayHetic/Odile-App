import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
/*
  Generated class for the ElementChoiceGround page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-element-choice-ground',
  templateUrl: 'element-choice-ground.html'
})
export class ElementChoiceGroundPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ElementChoiceGroundPage Page');
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

    this.navCtrl.push(ChooseChapterMoonPage);
  }
}
