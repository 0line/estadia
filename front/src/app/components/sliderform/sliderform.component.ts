import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import {Media} from '../../models/Media';
import { Observable, empty } from 'rxjs';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { PageService } from 'src/app/services/page.service';
@Component({
  selector: 'app-sliderform',
  templateUrl: './sliderform.component.html',
  styleUrls: ['./sliderform.component.scss']
})
export class SliderformComponent implements OnInit {
  media: Observable<Media[]>;
  submitted = false;
  frmimage: FormGroup;
  loading = false;
  url:string;
  frmSlider:FormGroup;
  idlelement:string;
  imgslider=new Array();
  constructor(private wp:MediaService,private formBuilder: FormBuilder,
              private pageService:PageService) {
    this.media = this.wp.getMedia();
  }
  ngOnInit() {
    this.frmimage=this.formBuilder.group({
      image_radio: ['', Validators.required]
    });
    this.frmSlider=this.formBuilder.group({
      input_slider_1: ['', Validators.required],
      input_slider_2: ['', Validators.required],
      input_slider_3: [''],
      input_slider_4: ['']
    });
  }
  get f() { 
    return this.frmSlider.controls; }

  openModal(e_idelement){
    this.idlelement=e_idelement;
    this.media = this.wp.getMedia();
  }
  setUrlImageInput(){
    this.submitted = true;
    //Si el formulario es invalido retorna una respuesta a la vista
    if (this.url==null) {
      console.log("No se selecciono una imagen");
    }
    else{
      this.frmSlider.controls[document.getElementById(this.idlelement).getAttribute('formControlName')].setValue(this.url);
      document.getElementById("img-"+this.idlelement).innerHTML='<img src='+this.url+' class="img-thumbnail w-75">';
      this.pageService.setSlider({formName:document.getElementById(this.idlelement).getAttribute('formControlName'),value:this.url,formtype:"slider"});
    }
  }
  seturl(url){
    this.url=url;
  }
}
