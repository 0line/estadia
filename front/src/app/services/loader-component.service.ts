import { Injectable, Inject,ComponentFactoryResolver } from '@angular/core';

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
  idcomponent:number;
  constructor(@Inject(ComponentFactoryResolver)factoryResololver) {
    this.factoryResololver=factoryResololver;
    this.idcomponent=0;
  }

  setRootViewContainerRef(viewContainerRef){
    this.rootViewContainer=viewContainerRef;
  }
  addDynamicComponent(component){
    this.factory=this.factoryResololver.resolveComponentFactory(component);
    this.componentAdd=this.factory.create(this.rootViewContainer.parentInjector);
    this.icomponent.push({name:component.name,componentI:this.componentAdd});
    this.rootViewContainer.insert(this.componentAdd.hostView);
  }
  removeDynamicComponent(component){
    var i;
    for (i in this.icomponent){
      if(this.icomponent[i].name==component.name){
        this.icomponent[i].componentI.destroy();
        delete this.icomponent[i]; 
      }
    }
  }

  createid():number{
    return this.idcomponent=Math.floor(Math.random() * (1000 - 1));
  }
}
