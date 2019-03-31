import { Component, OnInit } from '@angular/core';
import { Page } from '../../models/page';
import { TinyMceService } from '../../services/tiny-mce.service';
import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { attrInput } from 'src/app/services/attrinput';
import { textAreaInput } from 'src/app/services/createTextarea';
import { PageService } from 'src/app/services/page.service';
import { createInput } from 'src/app/services/createinput';

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.scss']
})
export class TinyEditorComponent implements OnInit {
  contenido:string;
  e_idgeneric: any;
  form:FormGroup;
  EditorForm=new Array();
  numberIndex:number;
  constructor(private Tiny:TinyMceService,private loader:LoaderComponentService,
    private formBuilder: FormBuilder,private pageService:PageService,) {
    this.contenido=Tiny.getContent();
    this.form=this.formBuilder.group({});
    this.numberIndex=0;
  }

  ngOnInit() {
    this.numberIndex=this.loader.numberComponent();

  }
  public tinyMceSettings = {
    apiKey:"10exaiaymntvt0olvhl7325duyeak4kkor6rlkk5obrozr5l",
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 450,
    plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount  imagetools textpattern help ',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment'
  };

  
  eliminar(){
    this.loader.removeDynamicComponent(this.numberIndex);
  }
  

  getBuilderHtml(){    
    return this.contenido=this.Tiny.getContent();
  }
  ngAfterViewInit(){
    setTimeout(()=>{      
      this.e_idgeneric=this.loader.createid();
      let Editor: attrInput<any>[] = [
        new textAreaInput({
          key: "editor_"+(this.e_idgeneric),
          type: 'textarea',
          id: "editor_"+this.e_idgeneric,
          order: 1,
        }),
        new createInput({
          key: "input_typeComponent_"+(this.e_idgeneric),
          required: true,
          type: 'hidden',
          order: 2,
          id: "input_typeComponent_"+this.e_idgeneric
        })];
      this.EditorForm=Editor;
        this.form=this.pageService.createForm(this.EditorForm);
        this.numberIndex=this.loader.numberComponent();

    });
  }
  
  getIndex(){
    return this.numberIndex;
  }

}
