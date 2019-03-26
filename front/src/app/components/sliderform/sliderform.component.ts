import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import {Media} from '../../models/Media';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { PageService } from 'src/app/services/page.service';
import { LoaderComponentService } from 'src/app/services/loader-component.service';
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
  e_idcomponent=new Array();
  e_idgeneric:any;
  inputdiv:any;
  constructor(private wp:MediaService,private formBuilder: FormBuilder,
              private pageService:PageService,
              private loader:LoaderComponentService) {
    this.media = this.wp.getMedia();
    this.inputdiv=[0,1,2,3];
  }
  ngOnInit() {
    this.frmimage=this.formBuilder.group({
      image_radio: ['', Validators.required]
    });
    
    this.frmSlider=this.formBuilder.group({}); 
    this.inputdiv.forEach(element => {
      this.e_idcomponent.push(this.loader.createid());
      this.frmSlider.addControl("input_slider_"+(this.e_idcomponent[element]), new FormControl('', Validators.required));
    });
  }
  ngAfterViewInit(){
    setTimeout(()=>{      
      this.e_idgeneric=this.loader.createid();
    });
  }
  get f() { 
    return this.frmSlider.controls; }

  openModal(e_idelement,e_idcomponent){
    this.media = this.wp.getMedia();
    document.getElementById("mediaModal").setAttribute("data-idmodal",e_idelement);
    document.getElementById("mediaModal").setAttribute("data-formid",e_idcomponent);
  }

  setUrlImageInput(){
    this.submitted = true;
    //Si el formulario es invalido retorna una respuesta a la vista
    if (this.url==null) {
      console.log("No se selecciono una imagen");
    }
    else{
      this.idlelement=document.getElementById("mediaModal").getAttribute("data-idmodal");
      (<HTMLInputElement>document.getElementById('input_slider_'+this.idlelement)).value = this.url;
      document.getElementById("img_slider_"+this.idlelement).innerHTML='<img src='+this.url+' class="img-thumbnail w-75">';
      this.pageService.setPage({idcomponent:"slidercomponent-"+document.getElementById("mediaModal").getAttribute("data-formid"), formName:"input_slider_"+this.idlelement,value:this.url,formtype:"slider"});
    }
  }
  seturl(url){
    this.url=url;
  }


}
