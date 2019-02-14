import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
