import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElementChoiceMoonPage } from '../element-choice-moon/element-choice-moon';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import * as io from "socket.io-client";

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
  private selectedAnswer:string;
  private socketHost:string;
  private socket:any;
  constructor(public navCtrl: NavController) {
    this.socketHost = "http://oceania.herokuapp.com/";
    this.socket = io(this.socketHost);
  }

  ionViewDidLoad() {
    console.log('Hello ChooseChapterMoonPage Page');
  }

  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block" ;
    containerImage.classList.remove('precedent');
    containerImage.classList.add('suivant');

  }

  chapitrePrecedent(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block";
    containerImage.classList.remove('suivant');
    containerImage.classList.add('precedent');
  }

  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      this.navCtrl.setRoot(ChooseChapterCloudPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else {
      //Valider réponse
    }
    //Laisser le temps à l'animation de se faire
  }

  selectAnswer(e) {

    let answer = e.target.classList[1].split('-')[1];

    this.socket.emit('answer-select', answer);

  }

}
