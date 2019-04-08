import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Inject, Input } from '@angular/core';import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { TinyEditorComponent } from '../tiny-editor/tiny-editor.component';
import { TinyMceService } from '../../services/tiny-mce.service';
import { SliderformComponent } from '../sliderform/sliderform.component';
import { PageService } from 'src/app/services/page.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { EditorformComponent } from '../editorform/editorform.component';
import { AlertService } from 'src/app/services/alert/alert.service';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  private loader;
  @ViewChild('editor',{
    read:ViewContainerRef
  })viewContainerEdit:ViewContainerRef;
  @ViewChild('builder',{
    read:ViewContainerRef
  })viewContainerBuilder:ViewContainerRef;
  
  form: FormGroup;
  frmPage:FormGroup; 

  constructor( @Inject (LoaderComponentService)LoaderComponentService,
              private TinyService:TinyMceService,
              private pageService:PageService,
              private formBuilder: FormBuilder,
              private sl:SliderformComponent,
              private editorForm:EditorformComponent,
              private tiny:TinyEditorComponent,
              private alert:AlertService) {
    this.loader=LoaderComponentService;
    this.form;
    this.frmPage;
  }

  ngOnInit() {    
    this.loader.setRootViewContainerRef(this.viewContainerEdit);
    this.loader.addDynamicComponent(TinyEditorComponent);
    this.form=this.formBuilder.group({});
    this.frmPage=this.formBuilder.group({
      title: ['', Validators.required],
      slug: ['', Validators.required]
    });
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
    }
  }

  savePage(){ 
    let slug=this.frmPage.controls['slug'].value;
    slug=slug.split(' ').join('-');
    this.frmPage.controls['slug'].setValue(slug);

    if(this.frmPage.controls['slug'].value!='' && this.frmPage.controls['title'].value!=''){
      this.pageService.savePage(this.frmPage.value);
    }
    else{
      this.alert.error("Faltan datos");
    }
  }
  

}
