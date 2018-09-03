import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input('imagens') imagens;
  cidade:any;
  segmento:any;
  registros;
  constructor(
    private http: HttpService,
    private router: Router
  ){
    this.http.ApiGet('page/get-header').subscribe((response:any) => {
      this.registros = response.resposta;
    });
  }

  buscaCidade(cidade){
    this.router.navigate(['guia-comercial'], { queryParams : { pagina : 1, segmento : 'segmento', cidade : this.cidade, categoria : 'categoria'  } })
  }

  buscaSegmento(segmento){
    this.http.ApiGet('segmentos/' + this.segmento).subscribe((response:any) => {
      if(response.resposta)
      {
        this.router.navigate(['guia-comercial'], { queryParams : { pagina : 1, segmento : response.resposta.id, cidade : 'cidade', categoria : 'categoria'  } })
      }
      else
      {
        alert('Segmento não encontrado');
      }
    });
  }

  ngOnInit(){

    $('nav.menu a').hover(function(){
      $(this).children('div').slideToggle();
    })

    $('section.topo a').hover(function(){
      $(this).children('div').slideToggle();
    })

    $('section.banner img.menu, nav.menu a').not('a.sub-item').on('click', function(){
      var ativo = $('nav.menu').css('left');
      var distancia = ativo == '0px' ? "-50%" : 0;

      $('nav.menu').animate({
        "left" : distancia
      }, 250);
    })
  }

}
