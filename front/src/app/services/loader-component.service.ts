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
  index:number;
  constructor(@Inject(ComponentFactoryResolver)factoryResololver) {
    this.factoryResololver=factoryResololver;
    this.idcomponent=0;
    this.index=0;
  }

  setRootViewContainerRef(viewContainerRef){
    this.rootViewContainer=viewContainerRef;
  }
  addDynamicComponent(component){
    this.factory=this.factoryResololver.resolveComponentFactory(component);
    this.componentAdd=this.factory.create(this.rootViewContainer.parentInjector); 
    this.rootViewContainer.insert(this.componentAdd.hostView);
    this.componentAdd.changeDetectorRef.detectChanges();
    this.index++;
    this.icomponent.push({name:component.name,componentI:this.componentAdd,index:this.index});  
  }
  removeDynamicComponent(componentindex){
    var i;
    for (i in this.icomponent){
      if(this.icomponent[i].index==componentindex){
        this.icomponent[i].componentI.destroy();
        delete this.icomponent[i]; 
      }
      if(componentindex==0){
        this.icomponent[i].componentI.destroy();
        delete this.icomponent[i];
      }
    }
  }

  createid():number{
    return this.idcomponent=Math.floor(Math.random() * (1000 - 1));
  }
  numberComponent(){
    return this.index;
  }
  
  getData(){
    return this.icomponent;
  }
}
