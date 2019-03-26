import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {PostComponent} from '../post/post.component';
import {PageComponent} from '../page/page.component';
import {MediaComponent} from '../media/media.component';
import { NewpostComponent } from '../newpost/newpost.component';
import {NewpageComponent} from '../newpage/newpage.component';
import { LoaderComponentService } from 'src/app/services/loader-component.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit{
  private adminmenu;
  private loader;
  private viewref;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
  );

  @ViewChild('DynamicComponent',{
    read:ViewContainerRef
  })viewContainerRef:ViewContainerRef;

  constructor(private breakpointObserver: BreakpointObserver, @Inject (LoaderComponentService)LoaderComponentService) 
  {
    this.loader=LoaderComponentService;
  }

  mostrarContenidoAdmin(){
    this.adminmenu=location.pathname;
    if(this.adminmenu==='/admin/home'){
      this.loader.setRootViewContainerRef(this.viewContainerRef);
      this.loader.addDynamicComponent(PostComponent);
    }
    if(this.adminmenu==='/admin/page'){
      this.loader.setRootViewContainerRef(this.viewContainerRef);
      this.loader.addDynamicComponent(PageComponent);
    }
    if(this.adminmenu==='/admin/media'){
      this.loader.setRootViewContainerRef(this.viewContainerRef);
      this.loader.addDynamicComponent(MediaComponent);
    }
    if(this.adminmenu==='/admin/newpost'){
      this.loader.setRootViewContainerRef(this.viewContainerRef);
      this.loader.addDynamicComponent(NewpostComponent);
    }
    if(this.adminmenu==='/admin/newpage'){
      this.loader.setRootViewContainerRef(this.viewContainerRef);
      this.loader.addDynamicComponent(NewpageComponent);
    }
  }
  
  ngOnInit(): void {
    this.mostrarContenidoAdmin();
  }
}
