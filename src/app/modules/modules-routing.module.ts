import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyIntroComponent } from './survey-intro/survey-intro.component';
import { SurveyComponent } from './survey/survey.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyIntroComponent,
  },
  {
    path: 'survey',
    component: SurveyComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
