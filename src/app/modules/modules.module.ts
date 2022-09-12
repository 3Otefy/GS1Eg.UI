import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyIntroComponent } from './survey-intro/survey-intro.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http,
    '../assets/i18n/',
    '.json');
}
@NgModule({
  declarations: [
    SurveyComponent,
    SurveyIntroComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild({  
      loader: {  
        provide: TranslateLoader,  
        useFactory: httpTranslateLoader,  
        deps: [HttpClient]  
      }  
    })
  ]
})
export class ModulesModule { }
