import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';

const routes: Routes = [
	{path: 'admin', component: NavAdminComponent},
	{path: 'page', component: NavAdminComponent},
	{path: 'media', component: NavAdminComponent},
	{path: 'newpost', component: NavAdminComponent},
	{path: 'newpage', component: NavAdminComponent},
	{ path: 'inicio', component: HomeContentComponent },
	{ path: 'sobre-mí', component: AboutContentComponent },
	{ path: 'portfolio', component: PortfolioContentComponent },
	{ path: 'blog', component: BlogContentComponent },
	{ path: 'contacto', component: ContactContentComponent },
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	{ path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
