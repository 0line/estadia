import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { attrInput } from './attrinput';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  jsonPage=new Array;
  html:any;
  a_formgroup=new Array();
  constructor() { }
  
  setPage(data){
    this.jsonPage.push(data);
  }
  getPage(){
    return this.jsonPage;
  }

  savePage(){
    
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

}
