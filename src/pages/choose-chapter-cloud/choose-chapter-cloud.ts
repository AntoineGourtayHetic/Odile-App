import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';
import { DeviceMotion, Shake } from 'ionic-native';
import * as io from "socket.io-client";

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

  public lastX:number;
  public lastY:number;
  public lastZ:number;
  private selectedAnswer:string;
  private socketHost:string;
  private socket:any;
  private pos:Object;


  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      this.socketHost = "https://oceania.herokuapp.com/";
      this.socket = io(this.socketHost);

      let subscription = DeviceMotion.watchAcceleration({frequency:200}).subscribe(acc => {

        this.lastX = Math.round(acc.x * 100) / 100;
        this.lastY = Math.round(acc.y * 100) / 100;
        this.lastZ = Math.round(acc.z * 100) / 100;


        this.pos = {x: this.lastX, y: this.lastY, z: this.lastZ, key: localStorage.getItem("key")};

        this.socket.emit('mobile:move', this.pos);

      });
    })
  }

  closePanel(){
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    let zoneChoixElement: any = document.getElementsByClassName('answers-container')[0];
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let imageInBox: any = document.getElementsByClassName('answer')[0];
    imageInBox.style.height = '17vh';

    zoneChangeGame.style.display = 'none';
    zoneChoixElement.style.display = 'block';
    zoneChoixElement.style.height = '50vh';
    containerImage.style.display = 'none';
  }

  //When clicking on the top right arrow
  chapitreSuivant(){
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    containerImage.style.display = "block" ;
    containerImage.classList.remove('precedent');
    containerImage.classList.add('suivant');

    //Change dynamicaly the image
    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', 'assets/images/tsunami.svg' );

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

  chapitrePrecedent() {
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    containerImage.style.display = "block";
    containerImage.classList.remove('suivant');
    containerImage.classList.add('precedent');

    let zoneImage: any = document.querySelector('.mainDiv__changingGame__image');
    zoneImage.setAttribute('src', 'assets/images/vague.svg');

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

  //When clicked on the bottom button
  nextPage(){
    let btn = document.querySelector(".buttonArea");
    console.log(btn);

    let containerTexte: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];

    document.querySelector(".water-fill").classList.add("anim");
    document.querySelector(".water-fill2").classList.add("anim");

    if (containerTexte.classList.contains('suivant')){
      let sending = {
        page: 'tsunami-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else if (containerTexte.classList.contains('precedent')){
      let sending = {
        page: 'tide-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    }
  }


  selectAnswer(e) {

    let answer = {answer: e.target.classList[1].split('-')[1], key: localStorage.getItem("key")};

    this.socket.emit('mobile:answer-select', answer);

    if(answer.answer == 'cloud') {
      this.navCtrl.setRoot(ElementChoiceCloudPage);
    }

  }
}
