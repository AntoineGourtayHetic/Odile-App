import { Component } from '@angular/core';
import { DeviceMotion } from 'ionic-native';
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
      this.socketHost = "http://10.33.1.82:1337";
      this.socket = io(this.socketHost);
      var subscription = DeviceMotion.watchAcceleration({frequency:200}).subscribe(acc => {

        if(!this.lastX) {
          this.lastX = acc.x;
          this.lastY = acc.y;
          this.lastZ = acc.z;
          return;
        }

        let deltaX:number, deltaY:number, deltaZ:number;
        deltaX = Math.abs(acc.x-this.lastX);
        deltaY = Math.abs(acc.y-this.lastY);
        deltaZ = Math.abs(acc.z-this.lastZ);

        if(deltaX + deltaY + deltaZ > 3) {
          this.moveCounter++;
        } else {
          this.moveCounter = Math.max(0, --this.moveCounter);
        }

        if(this.moveCounter > 2) {
          console.log('SHAKE');
          this.moveCounter=0;
        }

        this.lastX = Math.round(acc.x * 100) / 100;
        this.lastY = Math.round(acc.y * 100) / 100;
        this.lastZ = Math.round(acc.z * 100) / 100;

        this.pos = {x: this.lastX, y: this.lastY, z: this.lastZ};
        this.socket.emit('mobile:position', this.pos);
      });

    });

  }
}
