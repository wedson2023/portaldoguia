import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public slide_300x350:object;
  
  constructor() {
    this.slide_300x350 = [
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' }
    ]
  }

  ngOnInit() {
    $('article.scroll a').hover(function(){
      $(this).children('nav').slideToggle();
    })
  }

}
