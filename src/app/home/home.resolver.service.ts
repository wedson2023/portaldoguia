import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpService } from '../http.service';

@Injectable()
export class HomeResolverService implements Resolve<Observable<any>>  {

  constructor(private http: HttpService) {}

  resolve() {
    return this.http.ApiGet('page/get-home');
  }

}
