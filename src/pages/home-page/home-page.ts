import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DeviceMotion, Shake } from 'ionic-native';
import * as io from "socket.io-client";
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
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

  constructor(private navCtrl: NavController, platform:Platform) {
    platform.ready().then(() => {
      this.socketHost = "http:/localhost:1337/"; // To change when the node server is in production
      this.socket = io(this.socketHost);

      let subscription = DeviceMotion.watchAcceleration({frequency:200}).subscribe(acc => {

        this.lastX = Math.round(acc.x * 100) / 100;
        this.lastY = Math.round(acc.y * 100) / 100;
        this.lastZ = Math.round(acc.z * 100) / 100;

        this.pos = {x: this.lastX, y: this.lastY, z: this.lastZ};
        this.socket.emit('mobile:position', this.pos);
      });

      let watch = Shake.startWatch(60).subscribe(() => {
        console.log("SHAKING DA BOOTY")
      });

    });
  }

  onConnected() {
    let element: any = document.getElementById("water");
    element.addClass("start");
  }
  submitCode() {
    this.socket.emit('mobile:key', this.key);
  }
  /*Dev function to test navigation*/
  nextPage() {
    this.navCtrl.push(ChooseChapterCloudPage);
  }
}
