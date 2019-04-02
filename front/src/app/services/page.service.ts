import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { attrInput } from './attrinput';
import { LoaderComponentService } from './loader-component.service';
import { SafePipePipe } from '../pipes/safe-pipe.pipe';
import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';
@Injectable({
  providedIn: 'root'
})
export class PageService {
  jsonPage=new Array();
  componentes=new Array();
  tempJsonPage=new Array();
  html:any;
  a_formgroup=new Array();
  data:any;
  constructor(private loader:LoaderComponentService,private safeHtml:SafePipePipe) { }
  
  setPage(data){
    console.log();
    this.jsonPage.push(data);
  }
  updatePage(data){
    this.jsonPage.forEach(element => {
      element.index==data.index ? element.formControl[data.formControl].setValue(data.value): "";
    });
  }
  getPage(){
    return this.jsonPage;
  }

  savePage(){    
    this.componentes=this.loader.getData();
    this.tempJsonPage=[];
    for (let i = 0; i <= this.componentes.length; i++) {
      if(this.componentes[i]!=undefined)
      {
        for (let j = 0; j < this.jsonPage.length; j++) {
          if(this.jsonPage[j].index==this.componentes[i].index){
            this.tempJsonPage.push(this.jsonPage[j]);
            break;
          }
        }
      }   
    }
    this.jsonPage=this.tempJsonPage;
    this.createHtml(this.jsonPage);
  }
  createForm(inputForm:attrInput<any>[]){
    let group: any = {};
    inputForm.forEach(inputForm => {
      group[inputForm.key] = inputForm.required ? new FormControl(inputForm.value || '', Validators.required)
                                              : new FormControl(inputForm.value || '');
    });
    this.a_formgroup.push(new FormGroup(group));
    return new FormGroup(group)
  }

  groupt(){
    return this.a_formgroup;
  }

  dataSlider(param)
  {
    this.data=param;
  }

  getDataSlider(){
    return this.data;
  }

  createHtml(json){
    var pageHtml="";
    json.forEach(componente => {
      if(componente.typeComponent=="Slider"){
        var slider=this.buildSlider(componente.formControl);
        pageHtml=pageHtml+" "+slider;
      }
      if(componente.typeComponent=="Editor"){
        var editor=this.builderEditor(componente.formControl);
        pageHtml=pageHtml+" "+editor;

      }
    });
    console.log(pageHtml);
  }

  buildSlider(params):String{
    let  ImgSlider=['<section class="home-slider owl-carousel">'];
    for (const key in params) {
      if(params[key].value!=''){
        let img= '<div class="slider-item" style="background-image: url('+params[key].value+');">'+
                '<div class="overlay"></div>'+
                  '<div class="container">'+
                    '<div class="row slider-text justify-content-start align-items-center" data-scrollax-parent="true">'+
                      '<div class="col-md-8 col-lg-7 col-sm-12 ftco-animate text mb-4" data-scrollax=" properties: { translateY: '+"70%"+' }">'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>';
        ImgSlider.push(img);
      }
    }
    ImgSlider.push('</section>');  
    return ImgSlider.toString();
  }

  builderEditor(params){
    let contentEditor;
    for (const key in params) {
      if(params[key].value!=''){
        contentEditor= this.safeHtml.transform(params[key].value,"html");
      }
    }
    return contentEditor;
  }
}
