import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageSwitcherComponent } from './common/language-switcher/language-switcher.component';  
import { HttpInterceptorService } from './core/interceptor/http-interceptor.service';
export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http,
    '../assets/i18n/',
    '.json');
}
@NgModule({
  declarations: [
    LanguageSwitcherComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }

