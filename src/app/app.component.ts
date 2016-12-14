import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { ConnexionScreenPage } from '../pages/connexion-screen/connexion-screen';
import { ChooseChapterMoonPage } from '../pages/choose-chapter-moon/choose-chapter-moon';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = ChooseChapterMoonPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
