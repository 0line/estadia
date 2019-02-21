import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';

const routes: Routes = [
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	{ path: 'inicio', component: HomeContentComponent },
	{ path: 'sobre-mí', component: AboutContentComponent },
	{ path: 'portfolio', component: PortfolioContentComponent },
	{ path: 'blog', component: BlogContentComponent },
	{ path: 'contacto', component: ContactContentComponent },
	{ path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
