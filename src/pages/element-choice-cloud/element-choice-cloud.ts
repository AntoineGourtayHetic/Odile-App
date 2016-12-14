import {Component, Output, EventEmitter, Directive} from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import * as io from "socket.io-client";
import { DeviceMotion, Shake } from 'ionic-native';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
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

    let subscription = DeviceMotion.watchAcceleration({frequency:400}).subscribe(acc => {

      this.lastX = Math.round(acc.x * 100) / 100;
      this.lastY = Math.round(acc.y * 100) / 100;
      this.lastZ = Math.round(acc.z * 100) / 100;


      this.pos = {x: this.lastX, y: this.lastY, z: this.lastZ};

      this.socket.emit('mobile:move', this.pos);

    });

  }

  ionViewDidLoad() {
    console.log('Hello ElementChoiceCloudPage Page');
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
      this.navCtrl.setRoot(ChooseChapterGroundPage);
    } else if (containerTexte.classList.contains('precedent')){
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else {
      //Do nothing
    }
    //Laisser le temps à l'animation de se faire
  }
}
