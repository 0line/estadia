import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  jsonPage=new Array;
  html:any;
  constructor() { }
  
  setPage(data){
    this.jsonPage.push(data);
  }
  getPage(){
    return this.jsonPage;
  }

  savePage(){
    
  }

}
