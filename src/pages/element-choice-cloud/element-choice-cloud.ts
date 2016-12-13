import {Component, Output, EventEmitter, Directive} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
/*
  Generated class for the ElementChoiceCloud page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-element-choice-cloud',
  templateUrl: 'element-choice-cloud.html'
})

export class ElementChoiceCloudPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ElementChoiceCloudPage Page');
  }

  nextButton() {
    // A ADAPTER EN TYPE SCRIPT, CA NE MARCHE PAS .........
    let btn = document.querySelector(".buttonArea");
    console.log(btn);
    let clicked = false;
    let completed = false;

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");
    clicked = true;
    completed = true;

    this.navCtrl.push(ChooseChapterGroundPage);

//     btn.addEventListener("mouseup", function(){
//       clicked = false;
//       if (completed == false){
//         document.querySelector(".water-fill").classList.remove("anim");
//         document.querySelector(".water-fill2").classList.remove("anim");
//       }
//     });
//     document.querySelector(".water-fill").addEventListener('webkitTransitionEnd', function(){
//       if (clicked){
//         completed = true;
//         console.log('HERE YOU SWITCH PAGE ON PHONE AND DESKTOP -> NEXT CHAPTER');
//       }
//     })
//   }
//
// }
  }
}
//
// class Tracker {
//     count = 0;
//     constructor() {
//         window.addEventListener("mousedown", this.mouseDown);
//         window.addEventListener("mouseup", this.mouseUp);
//     }
//     mouseDown = (ev: MouseEvent) => {
//         window.addEventListener("mousemove", this.mouseMove);
//     }
//     mouseUp = (ev: MouseEvent) => {
//         window.removeEventListener("mousemove", this.mouseMove);
//     }
//     mouseMove = (ev: MouseEvent) => {
//         this.count++;
//         console.log(this.count);
//     }
// }
// new Tracker();
