import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {  Media} from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getMedia(): Observable<Media[]>{
    return this.http.get<Media[]>(environment.apiUrl+"/wp-json/wp/v2/media");
  }
  getAlgo(){
    
  }
}
