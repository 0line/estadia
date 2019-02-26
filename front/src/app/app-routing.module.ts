import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/inicio', pathMatch: 'full'},
	{ path: 'inicio', component: HomeContentComponent },
	{ path: 'sobre-mí', component: AboutContentComponent, canActivate: [AuthGuard] },
	{ path: 'portfolio', component: PortfolioContentComponent },
	{ path: 'blog', component: BlogContentComponent },
	{ path: 'contacto', component: ContactContentComponent },
	{
		path: 'admin',
		//canActivateChild: [RoleGuard],        // <-- This guard will run before the router directs you to the route
		//data: { roles : ['ROLE_USER'] },      // <-- Current Login in user must have role user.   You can access this array inside your guard.
		children: [
			{ path: 'login', component: LoginComponent },
		// <-- The rest of your user routes
		]
	},
	{ path: '**', pathMatch: 'full' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
