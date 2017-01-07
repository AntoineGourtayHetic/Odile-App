import { Component } from '@angular/core';

import { HomePagePage } from '../home-page/home-page';
import { ElementChoiceCloudPage } from '../element-choice-cloud/element-choice-cloud';
import { ElementChoiceMoonPage } from '../element-choice-moon/element-choice-moon';
import { ElementChoiceGroundPage } from '../element-choice-ground/element-choice-ground';
import { ChooseChapterCloudPage } from '../choose-chapter-cloud/choose-chapter-cloud';
import { ChooseChapterGroundPage } from '../choose-chapter-ground/choose-chapter-ground';
import { ChooseChapterMoonPage } from '../choose-chapter-moon/choose-chapter-moon';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePagePage;
  tab2Root: any = ElementChoiceMoonPage;
  tab3Root: any = ElementChoiceGroundPage;
  tab4Root: any = ElementChoiceCloudPage;
  tab5Root: any = ChooseChapterCloudPage;
  tab6Root: any = ChooseChapterGroundPage;
  tab7Root: any = ChooseChapterMoonPage;

  constructor() {

  }
}
