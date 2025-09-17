import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error);
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint, { withCredentials: true }).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error);
    });
  }

  private handleError(error: any): void {
    console.error('Request failed', error);
    if (error.status === 401) {
      localStorage.clear();
      this.router.navigate(['/login'], {
        queryParams: { errorMessage: error.error.error }
      });
    }
  }

}