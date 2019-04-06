import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Post} from '../models/post';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient,private authenticationService: AuthenticationService) {
    
  }
  getPost(): Observable<Post[]>{
    /* let currentUser: any[] = JSON.parse(localStorage.getItem('currentUser')) || [];
    let token=this.authenticationService.currentUserValue.token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}` 
      })
    }; */
    return this.http.get<Post[]>(environment.apiUrl+"/wp-json/wp/v2/posts");
  }
  
}
