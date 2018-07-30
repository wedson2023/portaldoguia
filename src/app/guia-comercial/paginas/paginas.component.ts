import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';

declare var $ :any;

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.sass']
})
export class PaginasComponent implements OnInit {

  pagina;
  empresas;

  constructor(private route: ActivatedRoute, private progresso: NgProgressService, private http: HttpService) { }

  ngOnInit() {
    this.progresso.start();    

    this.route.queryParams.subscribe((query:any) => {
      this.route.params.subscribe((param:any) => { 
        this.http.ApiGet('guia-comercial/page/' + ( param['pagina'] || 1 ) + '/' + ( query['segmento'] || 'segmento' ) + '/' + ( query['cidade'] || 'cidade' )).subscribe((response:any) => {
          this.empresas = response;

          $('html, body').animate({
            scrollTop: 0
          }, 300);

          this.progresso.done();
        });
      });
    });
  }

}
