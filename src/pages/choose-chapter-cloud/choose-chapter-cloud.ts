import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';
import * as io from "socket.io-client";

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

  private selectedAnswer:string;
  private socketHost:string;
  private socket:any;


  constructor(public navCtrl: NavController, public platform: Platform) {
    this.socketHost = "http://localhost:1337/";
    this.socket = io(this.socketHost);
  }


  ionViewDidLoad() {
    console.log('Hello ChooseChapterCloudPage Page');

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
    //Laisser le temps à l'animation de se faire
    setTimeout(this.pushPage(), 1200);
  }

  pushPage() {
    this.navCtrl.push(ElementChoiceCloudPage);
  }

  selectAnswer(e) {

    let answer = e.target.classList[1].split('-')[1];

    this.socket.emit('answer-select', answer);

  }

}
