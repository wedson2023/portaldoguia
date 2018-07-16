import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public slide_600x100:object;
  public slide_300x100:object;

  constructor(private http: HttpService){ }

  ngOnInit(){
    this.http.ApiGet('banner/header').subscribe((response:any) => {
      this.slide_600x100 = response.resposta['600x100'];
      this.slide_300x100 = response.resposta['300x100'];
    });

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
