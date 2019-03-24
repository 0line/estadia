import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Angular Material */
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
/**Angular Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {TinyMceService} from './services/tiny-mce.service';
import { HttpClientModule} from "@angular/common/http";
import { MediaComponent } from './components/media/media.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { NewpageComponent } from './components/newpage/newpage.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TinyEditorComponent } from './components/tiny-editor/tiny-editor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SliderformComponent } from './components/sliderform/sliderform.component';
import { PageService } from './services/page.service';
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
    PageComponent,
    MediaComponent,
    NewpostComponent,
    NewpageComponent,
    SafePipePipe,
    TinyEditorComponent,
    SliderformComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    /**Angular Material */
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    EditorModule,   
    FormsModule,
    ReactiveFormsModule,    
    MatTabsModule,
    CKEditorModule
  ],
  providers: [LoaderComponentService,TinyEditorComponent,SliderformComponent,PageService],
  bootstrap: [AppComponent],
  entryComponents:[PostComponent,PageComponent,MediaComponent,NewpostComponent,NewpageComponent,TinyEditorComponent,SliderformComponent]
})
export class AppModule { }
