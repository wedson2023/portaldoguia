import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private http: HttpService,
    private router: Router
  ){ }  

  buscaCidade(evento){
    console.log(evento);
    //this.router.navigate(['/guia-comercial', { pagina : 1 }]);
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
