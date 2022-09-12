import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-intro',
  templateUrl: './survey-intro.component.html',
  styleUrls: ['./survey-intro.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
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
export class SurveyIntroComponent implements OnInit {
  isOpen = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 200);
  }
  startSurvey(){
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.route.navigate(['/survey']);
    }, 200);
  }
}
