import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ElementChoiceMoonPage } from '../element-choice-moon/element-choice-moon';

/*
  Generated class for the ChooseChapterMoon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-chapter-moon',
  templateUrl: 'choose-chapter-moon.html'
})
export class ChooseChapterMoonPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChooseChapterMoonPage Page');
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
    this.navCtrl.push(ElementChoiceMoonPage);
  }
}
