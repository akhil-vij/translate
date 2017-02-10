import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { TranslationsComponent } from './translations/translations.component';
import { AboutComponent } from './about/about.component';

import { TranslateService } from './services/translate.service';
import { DataService } from './services/data.service';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    TranslationsComponent,
    AboutComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [TranslateService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
