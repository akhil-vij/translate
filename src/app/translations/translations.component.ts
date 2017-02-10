import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Tpair } from '../model/tpair.model';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  translations: Tpair[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.translations = this.dataService.getAllTranslations();
    console.log(this.translations);
  }

}
