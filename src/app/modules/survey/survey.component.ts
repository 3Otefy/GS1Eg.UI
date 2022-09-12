import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SueveryAnswers, UserAnswers } from '../models/suevery-answers';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class SurveyComponent implements OnInit {
  userInfo!: FormGroup;
  isOpen = false;
  startSurvey: boolean = false;
  sendSurvey: boolean = false;
  receptionistRating: boolean = false;
  employeeEvaluation: boolean = false;
  evaluateOurService: boolean = false;
  recommendUs: boolean = false;
  recommendedDetails: boolean = false;
  fromSubmitted: boolean = false;
  complaintsAndSuggestions: boolean = false;
  surveyUserAnswers!: SueveryAnswers; 
  constructor(
    private formBuilder: FormBuilder,
    private route:Router,
    private surveyService : SurveyService
  ) { 
    this.surveyUserAnswers = {
      mobileNumber: "",
      serviceType: "",
      surveyId: 2,
      userAnswers: []
    }
    this.initUserInfoForm();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 200);
  }
  initUserInfoForm() {
    this.userInfo = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern("^01[0-9]{9}")]],
      serviceType: ['', Validators.required],
      customerName: '',
      companyName: ''
    });
  }
  get fc() : { [key: string]: AbstractControl }{
    return this.userInfo.controls;
  }

  submit() {
    this.fromSubmitted =  true;
    
    if (this.userInfo.invalid) {
      return;
    }
    this.surveyUserAnswers.mobileNumber = this.userInfo.value.mobile; 
    this.surveyUserAnswers.serviceType = this.userInfo.value.serviceType; 
    this.surveyUserAnswers.companyName = this.userInfo.value.companyName; 
    this.surveyUserAnswers.customerName = this.userInfo.value.customerName; 
    
    this.startSurvey= true;
    this.receptionistRating = true;
  }
  addUserAnswer(id:number , event: Event, questionToHide:string, questionType: string){
    
    let userAnswer: UserAnswers = {
      questionId: id,
      userAnswer:(event.target as HTMLInputElement).value,
    };
    this.surveyUserAnswers.userAnswers?.push(userAnswer);
    setTimeout(() => {
      if(questionToHide == "receptionistRating") {
        this.receptionistRating = false;
        this.employeeEvaluation = true;
      }
      if(questionToHide == "employeeEvaluation") {
        this.employeeEvaluation = false;
        this.evaluateOurService = true;
      }
      if(questionToHide == "evaluateOurService") {
        this.evaluateOurService = false;
        this.recommendUs = true;
      }
      if (questionToHide == "recommendUs") {
        this.recommendUs = false;
        if (parseInt((event.target as HTMLInputElement).value) > 2) {
          this.recommendedDetails = true
        }
        else {
          this.complaintsAndSuggestions = true;
        }
      }
    }, 500);
  }
  recommendedInfo (name: string, nameQuestionID: number, nameQuestionType: string, phone: string, phoneQuestionID: number, phoneQuestionType: string,) {
    let recommendedName : UserAnswers = {
      questionId: nameQuestionID,
      userAnswer: name,
    };
    this.surveyUserAnswers.userAnswers?.push(recommendedName);
    let recommendedPhone : UserAnswers = {
      questionId: phoneQuestionID,
      userAnswer: phone,
    };
    this.surveyUserAnswers.userAnswers?.push(recommendedPhone);
    this.recommendedDetails = false;
    this.complaintsAndSuggestions = true;
  }
  submitSurvey(complaintsAndSuggestions:string, questionID: number, questionType: string) {
    let suggestion : UserAnswers = {
      questionId: questionID,
      userAnswer: complaintsAndSuggestions,
    };
    this.surveyUserAnswers.userAnswers?.push(suggestion);
    this.sendSurvey = !this.sendSurvey;
    this.isOpen = !this.isOpen;
    console.log(this.surveyUserAnswers);
    this.surveyService.sendSurvey(this.surveyUserAnswers).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/thank-you']);
    })
    
  }
}
