import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePagePage } from '../pages/home-page/home-page';
import { ElementChoiceCloudPage } from '../pages/element-choice-cloud/element-choice-cloud';
import { TabsPage } from '../pages/tabs/tabs';

import {ElementChoiceMoonPage} from "../pages/element-choice-moon/element-choice-moon";
import { ElementChoiceGroundPage } from '../pages/element-choice-ground/element-choice-ground';
import { ChooseChapterCloudPage } from '../pages/choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterGroundPage } from '../pages/choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../pages/choose-chapter-moon/choose-chapter-moon';
import { ConnexionScreenPage } from '../pages/connexion-screen/connexion-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePagePage,
    TabsPage,
    ElementChoiceCloudPage,
    ElementChoiceMoonPage,
    ElementChoiceGroundPage,
    ChooseChapterCloudPage,
    ChooseChapterGroundPage,
    ChooseChapterMoonPage,
    ConnexionScreenPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePagePage,
    TabsPage,
    ElementChoiceCloudPage,
    ElementChoiceMoonPage,
    ElementChoiceGroundPage,
    ChooseChapterCloudPage,
    ChooseChapterGroundPage,
    ChooseChapterMoonPage,
    ConnexionScreenPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
