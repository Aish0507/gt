import {AfterViewChecked, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet><span *ngIf="showLoader" class="loading"></span></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  showLoader: boolean = false;

  constructor(translate: TranslateService, private loaderService: LoaderService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngAfterViewChecked() {
    this.loaderService.status.subscribe((val: boolean) => {
      // this.cdRef.detectChanges();
      this.showLoader = val;
    });
  }
}
