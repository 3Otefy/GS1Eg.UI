import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
    }

    get(url: string): Observable<any> {
        return this.http.get(url, {
          headers: this.headers,
        });
      }

    post(url: string, resource: any): Observable<any> {
        return this.http.post( url, JSON.stringify(resource), {
          headers: this.headers,
        });
    }
  
}
