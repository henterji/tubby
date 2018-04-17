import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mpt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private translate: TranslateService) {
    const appConfig = window['appConfig'] || {};
    translate.setDefaultLang('en_US');
    translate.use(appConfig.locale || 'en_US');
  }
}
