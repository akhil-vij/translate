import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeComponent } from './practice/practice.component';
import { TranslationsComponent } from './translations/translations.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: 'practice', component: PracticeComponent},
    { path: 'translations', component: TranslationsComponent},
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo: '/practice', pathMatch: 'full'},
    { path: '**', component: PracticeComponent}
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
