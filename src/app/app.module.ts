import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Chapter1Page } from '../pages/chapter1/chapter1';
import { Chapter2Page } from '../pages/chapter2/chapter2';
import { Chapter3Page } from '../pages/chapter3/chapter3';
import { ConnectMobilePage } from '../pages/connect-mobile/connect-mobile';
import { HomePagePage } from '../pages/home-page/home-page';
import { LoadingPagePage } from '../pages/loading-page/loading-page';
import { TestTelephonePage } from '../pages/test-telephone/test-telephone';
import { ElementChoiceCloudPage } from '../pages/element-choice-cloud/element-choice-cloud';
import { TabsPage } from '../pages/tabs/tabs';
import {ElementChoiceMoonPage} from "../pages/element-choice-moon/element-choice-moon";
import { ElementChoiceGroundPage } from '../pages/element-choice-ground/element-choice-ground';

@NgModule({
  declarations: [
    MyApp,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    ConnectMobilePage,
    HomePagePage,
    LoadingPagePage,
    TestTelephonePage,
    TabsPage,
    ElementChoiceCloudPage,
    ElementChoiceMoonPage,
    ElementChoiceGroundPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    ConnectMobilePage,
    HomePagePage,
    LoadingPagePage,
    TestTelephonePage,
    TabsPage,
    ElementChoiceCloudPage,
    ElementChoiceMoonPage,
    ElementChoiceGroundPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
