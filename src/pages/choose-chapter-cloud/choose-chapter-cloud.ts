import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
/*
  Generated class for the ChooseChapterCloud page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-chapter-cloud',
  templateUrl: 'choose-chapter-cloud.html'
})
export class ChooseChapterCloudPage {


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChooseChapterCloudPage Page');
  }

  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    containerTexte.innerHTML = "Aller au chapitre 2";
    containerImage.style.display = "block" ;
    containerTexte.classList.remove('precedent');
    containerTexte.classList.add('suivant');

  }

  chapitrePrecedent(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    containerTexte.innerHTML = 'Aller au chapitre 3';
    containerImage.style.display = "block";
    containerTexte.classList.remove('suivant');
    containerTexte.classList.add('precedent');
  }

  //When clicked on the bottom button
  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__pageName')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      this.navCtrl.push(ChooseChapterGroundPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.push(ChooseChapterMoonPage);
    } else {
      //Valider réponse
    }
    //Laisser le temps à l'animation de se faire
  }

}
