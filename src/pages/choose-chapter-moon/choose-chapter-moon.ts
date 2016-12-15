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
    this.socketHost = "https://oceania.herokuapp.com/";
    this.socket = io(this.socketHost);
  }

  closePanel(){
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    zoneChangeGame.style.display = 'none';
    zoneChoixElement.style.display = 'block';
    zoneChoixElement.style.height = '50vh';
    containerImage.style.display = 'none';
  }

  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block" ;
    containerImage.classList.remove('precedent');
    containerImage.classList.add('suivant');

    //Change dynamicaly the image
    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', 'assets/images/maree.svg' );

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    zoneChoixElement.style.display = 'none';

    //Applying style to div
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    zoneChangeGame.style.display = 'block';
    zoneChangeGame.style.textAlign = 'center';

    //Applying style to image
    let imageJeu: any = document.getElementsByClassName('mainDiv__changingGame__image')[0];
    imageJeu.style.display = 'block';
    imageJeu.style.width = '50%';
    imageJeu.style.margin = 'auto';

    //Applying style to cancel image
    let cancelImage: any = document.getElementsByClassName('mainDiv__changingGame__cancel')[0];
    cancelImage.style.height = '10%';

  }

  chapitrePrecedent(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block";
    containerImage.classList.remove('suivant');
    containerImage.classList.add('precedent');

    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', 'assets/images/tsunami.svg');

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    zoneChoixElement.style.display = 'none';

    //Applying style to div
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    zoneChangeGame.style.display = 'block';
    zoneChangeGame.style.textAlign = 'center';

    //Applying style to image
    let imageJeu: any = document.getElementsByClassName('mainDiv__changingGame__image')[0];
    imageJeu.style.display = 'block';
    imageJeu.style.width = '50%';
    imageJeu.style.margin = 'auto';

    //Applying style to cancel image
    let cancelImage: any = document.getElementsByClassName('mainDiv__changingGame__cancel')[0];
    cancelImage.style.height = '10%';
  }

  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      let sending = {
        page: 'wave-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterCloudPage);
    } else if (containerTexte.classList.contains('precedent')){
      let sending = {
        page: 'tsunami-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else {
      //Valider réponse
    }
    //Laisser le temps à l'animation de se faire
  }

  selectAnswer(e) {

    let answer = {answer: e.target.classList[1].split('-')[1], key: localStorage.getItem("key")};

    this.socket.emit('mobile:answer-select', answer);

    if(answer.answer == 'moon') {
      this.navCtrl.setRoot(ElementChoiceMoonPage);
    }
    
  }

}
