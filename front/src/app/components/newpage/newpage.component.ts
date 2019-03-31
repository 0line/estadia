import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Inject, Input } from '@angular/core';import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { TinyEditorComponent } from '../tiny-editor/tiny-editor.component';
import { TinyMceService } from '../../services/tiny-mce.service';
import { SliderformComponent } from '../sliderform/sliderform.component';
import { PageService } from 'src/app/services/page.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { EditorformComponent } from '../editorform/editorform.component';
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
  
  form: FormGroup; 

  constructor( @Inject (LoaderComponentService)LoaderComponentService,
              private TinyService:TinyMceService,
              private pageService:PageService,
              private formBuilder: FormBuilder,
              private sl:SliderformComponent,
              private editorForm:EditorformComponent,
              private tiny:TinyEditorComponent) {
    this.loader=LoaderComponentService;
    this.e_id=[];
    this.e_id.push(1);
    this.e_columns=1;
    this.form;
  }

  ngOnInit() {    
    this.loader.setRootViewContainerRef(this.viewContainerEdit);
    this.loader.addDynamicComponent(TinyEditorComponent);
    this.form=this.formBuilder.group({});
  }
  

  addSliderBuilder(){
    this.loader.setRootViewContainerRef(this.viewContainerBuilder);
    this.loader.addDynamicComponent(SliderformComponent);
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
      this.tiny.eliminar();
    }
    else{
      this.loader.setRootViewContainerRef(this.viewContainerEdit);
      this.loader.addDynamicComponent(TinyEditorComponent);
      this.TinyService.setContent(this.e_section);  
    }
  }

  savePage(){    
    this.form=this.formBuilder.group(this.pageService.groupt());
    console.info(this.pageService.getPage());
    console.log("****");
    console.info(this.form.value);
    //this.editorForm.saveEditorContent();
  }
  

}
