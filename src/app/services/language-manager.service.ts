import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageManagerService {

  // private siteLanguage = new BehaviorSubject('en');
  // currentLang = this.siteLanguage.asObservable();

  // constructor(
  //   @Inject(DOCUMENT) private document: Document
  // ) { 
  //   this.document.documentElement.lang = localStorage.getItem('lang') || 'en';
  // }

  // changeLanguage(lang: string) {
  //   this.document.documentElement.lang = lang;
  //   this.siteLanguage.next(lang);
  //   console.log("7mama",this.currentAppLang);
    
  // }
  
  // get currentAppLang () {
  //   return this.siteLanguage;
  // }
}
