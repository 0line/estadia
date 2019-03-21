import { Component, OnInit } from '@angular/core';
import { Page } from '../../models/page';
import { TinyMceService } from '../../services/tiny-mce.service';
@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.scss']
})
export class TinyEditorComponent implements OnInit {
  contenido:string;
  constructor(private Tiny:TinyMceService) {
    this.contenido=Tiny.getContent();
  }

  ngOnInit() {
    
  }
  public tinyMceSettings = {
    apiKey:"10exaiaymntvt0olvhl7325duyeak4kkor6rlkk5obrozr5l",
    inline: false,
    statusbar: true,
    browser_spellcheck: true,
    height: 450,
    plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed  mentions linkchecker',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment'
  };

  getBuilderHtml(){
    this.contenido=this.Tiny.getContent();
    return this.contenido;
  }

}
