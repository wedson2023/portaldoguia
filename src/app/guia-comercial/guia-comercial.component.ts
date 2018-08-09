import { Component } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
declare var $ :any;
@Component({
  selector: 'app-guia-comercial',
  templateUrl: './guia-comercial.component.html',
  styleUrls: ['./guia-comercial.component.sass']
})
export class GuiaComercialComponent {

  quantidade;
  segmentos;
  empresas;

  pagina;
  segmento;
  cidade;
  categoria;

  constructor(private route: ActivatedRoute, private progresso: NgProgressService, private http: HttpService) { 
    this.http.ApiGet('guia-comercial/page/quantidade').subscribe((response:any) => {
      this.quantidade = response;
    });

    this.http.ApiGet('guia-comercial/page/segmentos').subscribe((response:any) => {
      this.segmentos = response.resposta;
    });

    this.navegar();
  }

  navegar(){
    this.progresso.start();    

    this.route.queryParams.subscribe((query:any) => {
      this.http.ApiGet('guia-comercial/page/' + ( query['pagina'] || 1 ) + '/' + ( query['segmento'] || 'segmento' ) + '/' + ( query['cidade'] || 'cidade' ) + '/' + ( query['categoria'] || 'categoria')).subscribe((response:any) => {
        this.empresas = response.resposta;

        this.quantidade = response.nav;

        this.pagina = ( query['pagina'] || 'pagina' );
        this.segmento = ( query['segmento'] || 'segmento' );
        this.cidade = ( query['cidade'] || 'cidade' );
        this.categoria = ( query['categoria'] || 'categoria' );

        $('html, body').animate({
          scrollTop: 0
        }, 1);

        this.progresso.done();
      });
    });
  }

}
