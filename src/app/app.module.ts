import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BlocComponent } from './bloc/bloc.component';
import { StepsComponent } from './steps/steps.component';
import { SectionComponent } from './section/section.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { TeamComponent } from './team/team.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    BlocComponent,
    StepsComponent,
    SectionComponent,
    TeamComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
