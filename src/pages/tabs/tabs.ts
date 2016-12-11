import { Component } from '@angular/core';

import { HomePagePage } from '../home-page/home-page';
import { LoadingPagePage } from '../loading-page/loading-page';
import { ElementChoicePage } from '../element-choice/element-choice';
import { Chapter1Page } from '../chapter1/chapter1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePagePage;
  tab2Root: any = LoadingPagePage;
  tab3Root: any = ElementChoicePage;
  tab4Root: any = Chapter1Page;

  constructor() {

  }
}
