import { Injectable } from '@angular/core';
import { SlideComponent } from 'angular-bootstrap-md';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  SliderComponent=new Array;
  html:any;
  constructor() { }
  
  setSlider(data){
    this.SliderComponent.push(data);
  }
  getSlider(){
    return this.SliderComponent;
  }
}
