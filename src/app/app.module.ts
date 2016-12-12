import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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
