import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Forms two way binding
import { FormsModule } from '@angular/forms';

// My components
import { AppComponent }             from './app.component';
import { ClubComponent}             from './club.component';
import { ClubDetailComponent}       from './club-detail.component';
import {ClubService}                from "./club.service";
import { DashboardComponent }       from './dashboard.component';

// Navigation
import {AppRoutingModule}            from  './app.routing.module';

import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
      BrowserModule ,
      FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
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
