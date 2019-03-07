import { Injectable, Inject,ComponentFactoryResolver } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoaderComponentService {
  factoryResololver: any;
  rootViewContainer: any;
  componenAdd:any;
  componentctual:any;

  constructor(@Inject(ComponentFactoryResolver)factoryResololver) {
    this.factoryResololver=factoryResololver;
  }

  setRootViewContainerRef(viewContainerRef){
    this.rootViewContainer=viewContainerRef;
  }
  addDynamicComponent(component){
    const factory=this.factoryResololver.resolveComponentFactory(component);
    this.componenAdd=factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(this.componenAdd.hostView);
  }
}
