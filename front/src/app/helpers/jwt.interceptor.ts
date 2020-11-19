import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        let token=this.authenticationService.currentUserValue.token;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    'Content-Type':  'application/json',
                    'Authorization': `Bearer ${token}` 
                }
            });
        }

        return next.handle(request);
    }
}