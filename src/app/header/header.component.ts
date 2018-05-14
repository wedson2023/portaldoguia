import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public slide_600x100:object;
  public slide_300x100:object;

  constructor(){
    this.slide_600x100 = [
        { 'imagem' : './assets/imagens/banner/600x100.jpg' },
        { 'imagem' : './assets/imagens/banner/600x100.jpg' },
        { 'imagem' : './assets/imagens/banner/600x100.jpg' }
    ]

    this.slide_300x100 = [
        { 'imagem' : './assets/imagens/banner/300x100.jpg' },
        { 'imagem' : './assets/imagens/banner/300x100.jpg' },
        { 'imagem' : './assets/imagens/banner/300x100.jpg' }
    ]
  }

  ngOnInit(){
    $('nav.menu a').hover(function(){
      $(this).children('div').slideToggle();
    })

    $('section.topo a').hover(function(){
      $(this).children('div').slideToggle();
    })    
  }

}
