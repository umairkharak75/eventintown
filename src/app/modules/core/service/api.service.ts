import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions;
  constructor(private http: HttpClient) {}

  getData(url): Observable<any> {

    return this.http.get<any>(this.createUrl(url), this.createHeaders());
  }
  
  

  createHeaders() {
    return (this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {'app_id': environment.app_id}

    });
  }

 

  createUrl(url) {
    const requestUrl = environment.backEndUrl + url;
    return requestUrl;
  }





}
