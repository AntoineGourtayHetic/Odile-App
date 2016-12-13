import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ElementChoiceMoon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-element-choice-moon',
  templateUrl: 'element-choice-moon.html'
})
export class ElementChoiceMoonPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ElementChoiceMoonPage Page');
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
  }

}
