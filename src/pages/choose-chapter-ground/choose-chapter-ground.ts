import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ElementChoiceGroundPage } from '../element-choice-ground/element-choice-ground';

import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';


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

  nextPage() {
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");
    //Laisser le temps à l'animation de se faire
    if (containerTexte.classList.contains('suivant')) {
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else if (containerTexte.classList.contains('precedent')) {
      this.navCtrl.setRoot(ChooseChapterCloudPage);
    } else {
      //Valider réponse
    }
  }
}
