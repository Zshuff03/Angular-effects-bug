import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReduxModule } from '../redux/redux.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
