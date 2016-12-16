import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DeviceMotion, Shake } from 'ionic-native';
import * as io from "socket.io-client";
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {
  public lastX:number;
  public lastY:number;
  public lastZ:number;
  private socketHost:string;
  private socket:any;
  private pos:Object;
  private moveCounter:number = 0;
  key:any;

  constructor(public navController: NavController, platform:Platform) {
    platform.ready().then(() => {
      this.socketHost = "https://oceania.herokuapp.com/"; // To change when the node server is in production
      this.socket = io(this.socketHost);

      this.socket.on('mobile:router-send', function (page) {
        console.log('ROUTING: ' + page);
        if(page == 'wave-intro') {
          this.navController.setRoot(ChooseChapterCloudPage);
        }

        if(page == 'tsunami-intro') {
          this.navController.setRoot(ChooseChapterGroundPage);
        }

        if(page == 'tide-intro') {
          this.navController.setRoot(ChooseChapterMoonPage);
        }
      });

      setTimeout(function() {
        let element: any = document.getElementById("water");
        element.className += " start";
      }, 25000);

      setTimeout(function() {
        navController.push(ChooseChapterCloudPage);
      }, 29000);

    });
  }

  onIntroFinished() {
    let element: any = document.getElementById("water");
    element.addClass("start");
  }

  submitCode() {
    this.socket.emit('mobile:key', this.key);
  }
  /*Dev function to test navigation*/
  nextPage() {
    this.navController.push(ChooseChapterCloudPage);
  }
}
