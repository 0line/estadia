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
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + '/wp-json/wp/v2/posts');
  }
}
