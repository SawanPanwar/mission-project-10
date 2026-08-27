import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  token: any

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('fname') && localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      req = req.clone({
        setHeaders: {
          "withCredentials": "true",
          "name": "Sawan",
          Authorization: this.token
        }
      })
    }
    return next.handle(req);
  }
}