import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Forms two way binding
import { FormsModule } from '@angular/forms';

// My components
import { AppComponent}   from './app.components';
import { ClubDetailComponent} from './club-detail.component';


@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, ClubDetailComponent ],   // all components in our application module
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
