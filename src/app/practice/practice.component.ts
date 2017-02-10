import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  english: string;
  spanish: string;
  constructor(private translateService: TranslateService, private dataService: DataService) { }

  ngOnInit() {
  }
  onClick() {
    // Important: Need to subscribe to the observable that fetches data from the backend
    this.translateService.getTranslation(this.english).subscribe(
                               data => this.spanish = data, 
                                err => console.log(err));
  }
  onAdd() {
    // Do nothing if user has already favorited this english word
    /*if (localStorage.getItem(this.english) !== null) {
      return;
    }*/
    // Store the word with the spanish translation in the browser localStorage
    localStorage.setItem(this.english, this.spanish);
    // Update the Favorite service
    this.dataService.saveTranslation(this.english, this.spanish);
  }
}
