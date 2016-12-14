import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
import { ChooseChapterCloudPage} from '../choose-chapter-cloud/choose-chapter-cloud';
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

  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    containerTexte.innerHTML = "Aller au chapitre 3";
    containerImage.style.display = "block" ;
    containerTexte.classList.remove('precedent');
    containerTexte.classList.add('suivant');

  }

  chapitrePrecedent(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    containerTexte.innerHTML = 'Aller au chapitre 1';
    containerImage.style.display = "block";
    containerTexte.classList.remove('suivant');
    containerTexte.classList.add('precedent');
  }

  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.push(ChooseChapterCloudPage);
    } else {
      //Do nothing
    }
    //Laisser le temps à l'animation de se faire
  }
}
