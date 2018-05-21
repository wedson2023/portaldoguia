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
    $('.slide-slick-3').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      });

    $('.prev').on('click', function(){
      $('.slide-slick-3').slick("slickPrev");
    });

    $('.next').on('click', function(){
      $('.slide-slick-3').slick("slickNext");
    });

    $('.slide-slick-6').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }

}
