import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';
import * as io from "socket.io-client";
import { Storage } from '@ionic/storage';
/*
  Generated class for the ConnexionScreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connexion-screen',
  templateUrl: 'connexion-screen.html'
})
export class ConnexionScreenPage {

  private socketHost:string;
  private socket:any;
  key:any;

  constructor(public navCtrl: NavController, public platform: Platform, public storage:Storage) {
    platform.ready().then(() => {
      this.socketHost = "https://oceania.herokuapp.com/"; // To change when the node server is in production
      this.socket = io(this.socketHost);
      let socket = this.socket;

      socket.on('mobile:granted', function(access) {
        console.log(navCtrl);
        if(access==true) {
          navCtrl.push(HomePagePage);
        } else {
          // handle errors
        }
      })
    });
  }

  submitCode() {
    this.storage.set('bonkey', this.key);
    localStorage.setItem("key", this.key);
    console.log('LA BONNE KLE DE TA MERE ' + this.key);
    console.log('SET ITEM WALLAH: '  + localStorage.getItem("key"));
    this.socket.emit('mobile:key', this.key);
  }

  changePage(page) {
    let sending = {
      page: page,
      key: localStorage.getItem("key")
    }
    this.socket.emit('mobile:router', sending);
  }

  /*Open a new page*/
  nextPage() {
    this.navCtrl.push(HomePagePage);
  }

  toCloudQuestion() {
    this.navCtrl.push(ChooseChapterCloudPage);
  }
}
