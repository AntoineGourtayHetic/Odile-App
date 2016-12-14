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
    this.socketHost = "http://oceania.herokuapp.com/";
    this.socket = io(this.socketHost);

    let subscription = DeviceMotion.watchAcceleration({frequency:200}).subscribe(acc => {

      this.lastX = Math.round(acc.x * 100) / 100;
      this.lastY = Math.round(acc.y * 100) / 100;
      this.lastZ = Math.round(acc.z * 100) / 100;


      this.pos = {x: this.lastX, y: this.lastY, z: this.lastZ};

      this.socket.emit('mobile:move', this.pos);

    });

  }

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
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else {
      //Valider réponse
    }
    //Laisser le temps à l'animation de se faire
  }

  pushPage() {
    this.navCtrl.push(ElementChoiceCloudPage);
  }

  selectAnswer(e) {

    let answer = e.target.classList[1].split('-')[1];

    this.socket.emit('answer-select', answer);

  }
}
