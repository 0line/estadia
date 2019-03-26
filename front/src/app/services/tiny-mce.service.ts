import { Injectable } from '@angular/core';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class TinyMceService {
  
  private contenido:string;
  //Pagina: Page;
  constructor() {}
  
  setContent(content:string){
    this.contenido=content;
  }
  getContent(){
    return this.contenido;
  }
}
