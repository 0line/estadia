import { Injectable, Inject,ComponentFactoryResolver } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { isComponent } from '@angular/core/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class LoaderComponentService {
  factoryResololver: any;
  rootViewContainer: any;
  componentAdd:any;
  componentctual:any;
  factory:any;
  icomponent=new Array;
  tmp=new Array;
  constructor(@Inject(ComponentFactoryResolver)factoryResololver) {
    this.factoryResololver=factoryResololver;
  }

  setRootViewContainerRef(viewContainerRef){
    this.rootViewContainer=viewContainerRef;
  }
  addDynamicComponent(component){
    this.factory=this.factoryResololver.resolveComponentFactory(component);
    this.componentAdd=this.factory.create(this.rootViewContainer.parentInjector);
    this.icomponent.push({name:component.name,componentI:this.componentAdd});
    this.rootViewContainer.insert(this.componentAdd.hostView);
    console.log(this.icomponent);
  }
  removeDynamicComponent(component){
    var i;
    for (i in this.icomponent){
      if(this.icomponent[i].name==component.name){
        this.icomponent[i].componentI.destroy();
        delete this.icomponent[i]; 
      }
    }
    console.log(this.icomponent);
  }
}
