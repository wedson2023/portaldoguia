import { HttpService } from './../../http.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoticiaResolverService implements Resolve<Observable<any>> {

  constructor(
    private http: HttpService,    
  ) {
   }

  resolve(route: ActivatedRouteSnapshot){
    return this.http.ApiGet('page/mostrar-noticia/' + route.params.url);
  }

}
