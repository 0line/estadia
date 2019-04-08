import { Component, OnInit, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoaderComponentService } from 'src/app/services/loader-component.service';
import { MediaService } from 'src/app/services/media.service';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  value = 'Clear me';

  frmPost: FormGroup;
  public tinyMceSettings = {
    apiKey:"10exaiaymntvt0olvhl7325duyeak4kkor6rlkk5obrozr5l",
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 550,
    plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount  imagetools textpattern help ',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment'
  };
  @Input() form: FormGroup;
  constructor(private formBuilder: FormBuilder, private alert: AlertService,
    private loader:LoaderComponentService,private wp:MediaService) {
    this.frmPost = formBuilder.group({
      title: ['', Validators.required],
      slug: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+/g)]]
    });
    this.form = formBuilder.group({});
  }

  ngOnInit() {
  }

  savePost() {
    let slug = this.frmPost.controls.slug.value;
    slug = slug.split(/[^A-Za-z0-9]+/g).join('-');
    slug=slug.split(/[^A-Za-z0-9]+$/g).join('');
    this.frmPost.controls.slug.setValue(slug);

    if (this.frmPost.controls.slug.value != '' && this.frmPost.controls.title.value != '') {
      console.log(this.frmPost.value);
      // this.pageService.savePage(this.frmPage.value);
    } else {
      this.alert.error('Faltan datos');
    }
  }
}
