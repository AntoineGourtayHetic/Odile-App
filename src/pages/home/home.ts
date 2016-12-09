import { Component } from '@angular/core';
import { DeviceMotion, Shake } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import * as io from "socket.io-client";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lastX:number;
  public lastY:number;
  public lastZ:number;
  private socketHost:string;
  private socket:any;
  private pos:Object;
  private moveCounter:number = 0;
  constructor (private navController: NavController, platform:Platform) {
    platform.ready().then(() => {
      this.socketHost = "https://oceania.herokuapp.com"; // To change when the node server is in production
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
}
