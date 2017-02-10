import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeComponent } from './practice/practice.component';
import { TranslationsComponent } from './translations/translations.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
    { path: 'practice', component: PracticeComponent},
    { path: 'translations', component: TranslationsComponent},
    { path: 'quiz', component: QuizComponent},
    { path: '', redirectTo: '/practice', pathMatch: 'full'}, // Default/home should be practice, need to match full else all paths match
    { path: '**', component: PracticeComponent} // Any unknown path, just redirect to practice
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
