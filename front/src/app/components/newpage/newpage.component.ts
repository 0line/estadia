import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Inject } from '@angular/core';import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { TinyEditorComponent } from '../tiny-editor/tiny-editor.component';
import { TinyMceService } from '../../services/tiny-mce.service';
import { SliderformComponent } from '../sliderform/sliderform.component';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  /**Contador número de id para los elementos*/
  e_id:any[];
  e_section:string;
  e_editor:string;
  e_content:string;
  e_columns:number;
  private loader;
  @ViewChild('editor',{
    read:ViewContainerRef
  })viewContainerEdit:ViewContainerRef;
  @ViewChild('builder',{
    read:ViewContainerRef
  })viewContainerBuilder:ViewContainerRef;

  constructor( @Inject (LoaderComponentService)LoaderComponentService,private TinyService:TinyMceService,private TinyComponent:TinyEditorComponent) {
    this.loader=LoaderComponentService;
    this.e_id=[];
    this.e_id.push(1);
    this.e_columns=1;
  }

  ngOnInit() {    
    this.loader.setRootViewContainerRef(this.viewContainerEdit);
    this.loader.addDynamicComponent(TinyEditorComponent);
  }
  

  addSliderBuilder(){
    this.loader.setRootViewContainerRef(this.viewContainerBuilder);
    this.loader.addDynamicComponent(SliderformComponent);
  }
  removeSliderBuilder(){
    this.loader.removeDynamicComponent(SliderformComponent);
  }
  addEditorBuilder(){
    this.loader.setRootViewContainerRef(this.viewContainerBuilder);
    this.loader.addDynamicComponent(TinyEditorComponent);
  }
  removeEditorBuilder(){
    this.loader.removeDynamicComponent(TinyEditorComponent);
  }

  getContentTab(tab){
    if(tab.index===1){
      this.loader.removeDynamicComponent(TinyEditorComponent);
      this.removeEditorBuilder();
    }
    else{
      this.loader.setRootViewContainerRef(this.viewContainerEdit);
      this.loader.addDynamicComponent(TinyEditorComponent);
      this.TinyService.setContent(this.e_section);  
    }
  }

}
