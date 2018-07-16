import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable()
export class HttpService {

  token = sessionStorage.getItem('usuario') ? JSON.parse(sessionStorage.getItem('usuario')).token : '';

  headers = {
    headers: new HttpHeaders({     
      'Content-Type' : 'application/json',
      'Authorization' : this.token
    })
  }

  constructor(private http: HttpClient) { }

  ApiWithUpload(url, data){ 
    let headers = {
    headers: new HttpHeaders({     
      'Authorization' : this.token
    })
  }

    return this.http.post(environment.api + url, data, headers);
  }

  ApiPost(url, data){
    return this.http.post(environment.api + url, data, this.headers);
  }

  ApiGet(url){
    return this.http.get(environment.api + url, this.headers);
  }

  ApiGetNavigate(url){
    return this.http.get(url, this.headers);
  }

}
