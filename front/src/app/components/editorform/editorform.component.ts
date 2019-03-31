import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { PageService } from 'src/app/services/page.service';
import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { TinyMceService } from 'src/app/services/tiny-mce.service';

@Component({
  selector: 'app-editorform',
  templateUrl: './editorform.component.html',
  styleUrls: ['./editorform.component.scss']
})
export class EditorformComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  loading = false;
  idlelement:string;
  e_idcomponent=new Array();
  e_idgeneric:any;
  e_contenidoTiny:string;
  
  constructor(private pageService:PageService,private Tiny:TinyMceService,
    private loader:LoaderComponentService, private formBuilder: FormBuilder,) {
      this.form=this.formBuilder.group({});
      this.e_contenidoTiny="";
    }

  ngOnInit() {
  }
  ngAfterViewInit(){
    setTimeout(()=>{      
      this.e_idgeneric=this.loader.createid();
      this.e_contenidoTiny=this.Tiny.getContent();
    });
  }
  public tinyMceSettings = {
    selector: "textarea",
    apiKey:"10exaiaymntvt0olvhl7325duyeak4kkor6rlkk5obrozr5l",
    inline: false,
    statusbar: true,
    browser_spellcheck: true,
    height: 450,
    plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed  mentions linkchecker',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment'
  };

  saveEditorContent(){
    var x=document.getElementById('contenidoTiny-'+this.e_idgeneric);
  }
  ngOnChanges(): void {

    this.e_contenidoTiny=this.Tiny.getContent();
  }
}
