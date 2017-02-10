import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Tpair } from '../model/tpair.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  translations: Tpair[] = [];
  currentTranslation: Tpair;
  answer: string;
  correct = false; // Let TS implicitly figure out the type here
  submitted = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Always get the data and do heavy loading stuff in the on init hook rather than the constructor
    this.translations = this.dataService.getAllTranslations();
    const len = this.translations.length;
    // Random Quiz
    this.currentTranslation = this.translations[Math.floor(Math.random() * len)];
  }

  onAnswer() {
    this.correct = (this.answer === this.currentTranslation['spanish']);
    this.submitted = true;
  }

}
