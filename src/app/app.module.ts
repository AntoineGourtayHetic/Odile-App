import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Chapter1Page } from '../pages/chapter1/chapter1';
import { Chapter2Page } from '../pages/chapter2/chapter2';
import { Chapter3Page } from '../pages/chapter3/chapter3';
import { ConnectMobilePage } from '../pages/connect-mobile/connect-mobile';
import { ElementChoicePage } from '../pages/element-choice/element-choice';
import { HomePagePage } from '../pages/home-page/home-page';
import { LoadingPagePage } from '../pages/loading-page/loading-page';
import { TestTelephonePage } from '../pages/test-telephone/test-telephone';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    ConnectMobilePage,
    ElementChoicePage,
    HomePagePage,
    LoadingPagePage,
    TestTelephonePage,
    TabsPage
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
    ElementChoicePage,
    HomePagePage,
    LoadingPagePage,
    TestTelephonePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
