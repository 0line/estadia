import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Angular Material */
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
/**Angular Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**Mis componentes estaticos */
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PostComponent } from './components/post/post.component';
import {PageComponent} from './components/page/page.component';
/**Mis LoaderComponent Dynamics */
import {LoaderComponentService} from './services/loader-component.service';

@NgModule({
  declarations: [
    /**Mis Componentes estaticos */
    AppComponent,
    NavMainComponent,
    HomeSliderComponent,
    HomeContentComponent,
    AboutContentComponent,
    PortfolioContentComponent,
    BlogContentComponent,
    ContactContentComponent,
    FooterComponent,
    NavAdminComponent,
    PostComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**Angular Material */
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule
    /**Angular Material */
  ],
  providers: [LoaderComponentService],
  bootstrap: [AppComponent],
  entryComponents:[PostComponent,PageComponent]
})
export class AppModule { }
