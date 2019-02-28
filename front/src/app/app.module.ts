import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/**Assets */
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
/**Componets */
import { AppComponent } from './app.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeSliderComponent,
    HomeContentComponent,
    AboutContentComponent,
    PortfolioContentComponent,
    BlogContentComponent,
    ContactContentComponent,
    FooterComponent,
    LoginComponent,
    AlertComponent,
    NavAdminComponent,
    HomeAdminComponent
  ],
  imports: [
    /************************/
    MatSnackBarModule,
    /************************/
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
