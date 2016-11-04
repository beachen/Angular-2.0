import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.components';
// Forms two way binding
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
