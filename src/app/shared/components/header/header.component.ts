import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../../translate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public translatedText: string;
  public supportedLanguages: any[];

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private _translate: TranslateService,) { }

  ngOnInit() {
    this.supportedLanguages = [
    { display: 'English', value: 'en' },
    { display: 'Русский', value: 'ru' },
    { display: 'Azərbaycan', value: 'az' },
    ];
    this.selectLang('en');
    //this.dataSource.sort = this.sort;
  }

  sCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant('');
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
