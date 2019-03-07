import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
    
  }
  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(environment.apiUrl+"/wp-json/wp/v2/posts");
  }
}
