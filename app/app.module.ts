import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Forms two way binding
import { FormsModule } from '@angular/forms';

// Navigation
import { RouterModule }   from '@angular/router';

// My components
import { AppComponent }             from './app.component';
import { ClubComponent}             from './club.component';
import { ClubDetailComponent}       from './club-detail.component';
import {ClubService}                from "./club.service";
import { DashboardComponent }       from './dashboard.component';
import {AppRoutingModule}            from  './app.routing.module';

@NgModule({
  imports:      [
      BrowserModule ,
      FormsModule,
      AppRoutingModule
  ],
  // All components in our application module
  declarations: [
      AppComponent,
      DashboardComponent,
      ClubComponent,
      ClubDetailComponent ],
  bootstrap:    [ AppComponent,  ],
  providers:[ClubService]


})
export class AppModule { }
