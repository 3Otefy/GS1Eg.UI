import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { APIsUrls } from 'src/app/core/urls/urls';
import { environment } from 'src/environments/environment';
import { SueveryAnswers } from '../models/suevery-answers';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private apiService: ApiService) { }

  // getQuestions(): Observable<ApiResponse<SurveyQuestions[]>> {
  //   return this.apiService.get(this.apiURL);
  // }
  sendSurvey(obj: SueveryAnswers){
    return this.apiService.post(environment.baseUrl+APIsUrls.sendSurvey, obj);
  }
}
