import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { attrInput } from './attrinput';
import { LoaderComponentService } from './loader-component.service';
import { SafePipePipe } from '../pipes/safe-pipe.pipe';
import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PageService {
  jsonPage = new Array();
  componentes = new Array();
  tempJsonPage = new Array();
  a_formgroup = new Array();
  data: any;
  constructor(private loader: LoaderComponentService, private safeHtml: SafePipePipe, private http: HttpClient) { }

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(environment.apiUrl + '/wp-json/wp/v2/pages');
  }

  setPage(data) {
    this.jsonPage.push(data);
  }
  updatePage(data) {
    this.jsonPage.forEach(element => {
      element.index == data.index ? element.formControl[data.formControl].setValue(data.value) : '';
    });
  }
  getPage() {
    return this.jsonPage;
  }

  savePage(params) {
    const currentUser: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
    this.componentes = this.loader.getData();
    this.tempJsonPage = [];
    for (let i = 0; i <= this.componentes.length; i++) {
      if (this.componentes[i] != undefined) {
        for (let j = 0; j < this.jsonPage.length; j++) {
          if (this.jsonPage[j].index == this.componentes[i].index) {
            this.tempJsonPage.push(this.jsonPage[j]);
            break;
          }
        }
      }
    }
    this.jsonPage=this.tempJsonPage;
    const body = {
      content: this.createHtml(this.jsonPage),
      title: params['title'],
      slug: params['slug'],
      type: 'page'
    };
    console.log(body);
    const wpSave = new Promise((resolve, reject) => {
      this.http.post<any>(environment.apiUrl + '/wp-json/wp/v2/posts', body)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
          console.log(err);
        });
    });
  }
  createForm(inputForm: attrInput<any>[]) {
    const group: any = {};
    inputForm.forEach(inputForm => {
      group[inputForm.key] = inputForm.required ? new FormControl(inputForm.value || '', Validators.required)
                                              : new FormControl(inputForm.value || '');
    });
    this.a_formgroup.push(new FormGroup(group));
    return new FormGroup(group);
  }

  groupt() {
    return this.a_formgroup;
  }

  createHtml(json) {
    let pageHtml = '';
    json.forEach(componente => {
      if (componente.typeComponent == 'Slider') {
        const slider = this.buildSlider(componente.formControl);
        pageHtml = pageHtml + ' ' + slider;
      }
      if (componente.typeComponent == 'Editor') {
        const editor = this.builderEditor(componente.formControl);
        pageHtml = pageHtml + ' ' + editor;
      }
    });
    return pageHtml;
  }

  buildSlider(params): String {
    const  ImgSlider = ['<section class="home-slider owl-carousel">'];
    for (const key in params) {
      if (params[key].value != '') {
        const img = '<div class="slider-item" style="background-image: url(' + params[key].value + ');">' +
                      '<div class="overlay"></div>' +
                        '<div class="container">' +
                          '<div class="col-md-8 col-lg-7 col-sm-12 ftco-animate text mb-4" data-scrollax=" properties: { translateY: ' + '70%' + ' }">' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
        ImgSlider.push(img);
      }
    }
    ImgSlider.push('</section>');
    var html="";
    ImgSlider.forEach(element => {
      html=html+element.split('"').join("'");
    });
    return html;
  }

  builderEditor(params) {
    let contentEditor;
    for (const key in params) {
      if (params[key].value != '') {
        contentEditor = params[key].value;
      }
    }
    contentEditor=contentEditor.split('"').join("'");
    return contentEditor;
  }
}
