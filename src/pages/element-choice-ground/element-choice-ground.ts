import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from "socket.io-client";
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';
import { ChooseChapterCloudPage} from '../choose-chapter-cloud/choose-chapter-cloud';
/*
  Generated class for the ElementChoiceGround page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-element-choice-ground',
  templateUrl: 'element-choice-ground.html'
})
export class ElementChoiceGroundPage {

  private socketHost:string;
  private socket:any;

  constructor(public navCtrl: NavController) {
    this.socketHost = "https://oceania.herokuapp.com/";
    this.socket = io(this.socketHost);
    this.socket.emit('mobile:update', localStorage.getItem('key'));
  }

  closePanel(){
    let zoneChangeGame: any = document.getElementsByClassName('mainDiv__changingGame')[0];
    let zoneChoixElement: any = document.getElementsByClassName('mainDiv__ground')[0];
    let containerImage: any = document.getElementsByClassName('bottomNavArrow__content__image')[0];
    let imageChangeGame: any = document.querySelector('.mainDiv__changingGame__image');
    imageChangeGame.setAttribute('src', '');

    zoneChangeGame.style.display = 'none';
    zoneChoixElement.style.display = 'block';
    zoneChoixElement.style.position = 'relative';
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
    zoneImage.setAttribute('src', 'assets/images/vague.svg' );

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('mainDiv__ground')[0];
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
    zoneImage.setAttribute('src', 'assets/images/maree.svg');

    //Hiding this div
    let zoneChoixElement: any = document.getElementsByClassName('mainDiv__ground')[0];
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

    if (containerTexte.classList.contains('suivant')) {
      let sending = {
        page: 'tide-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterMoonPage);
    } else if (containerTexte.classList.contains('precedent')) {
      let sending = {
        page: 'wave-intro',
        key: localStorage.getItem("key")
      }
      this.socket.emit('mobile:router', sending);
      this.navCtrl.setRoot(ChooseChapterCloudPage);
    } else {
      //Valider réponse
    }
    //Laisser le temps à l'animation de se faire
  }
}
