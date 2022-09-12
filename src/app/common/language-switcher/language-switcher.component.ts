import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { LanguageManagerService } from 'src/app/services/language-manager.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  appDirection : string = (localStorage.getItem('lang') == "en") ? 'ltr' : 'rtl' ;
  appLanguage : string = (localStorage.getItem('lang') == "en") ? 'en' : 'ar' ;

  constructor(
    public translate: TranslateService,  
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'ar']); 
    this.document.documentElement.lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(this.appLanguage);
    document.getElementsByTagName('html')[0].setAttribute('dir', this.appDirection);
   }

  ngOnInit(): void {
    
  }
  switchLanguage(language:string) {
    this.appLanguage = language;
    this.document.documentElement.lang = language;
    localStorage.setItem('lang', language);
    this.translate.use(language);
    if (language == 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
  }
}
