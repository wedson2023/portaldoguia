import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterContentInit {
  public slide_300x350:object;
  
  constructor(private progresso: NgProgressService) {
    this.slide_300x350 = [
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' }
    ]
    this.progresso.start();
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

    $('.prev-turisticos').on('click', function(){
      $('.slide-turisticos').slick("slickPrev");
    });

    $('.next-turisticos').on('click', function(){
      $('.slide-turisticos').slick("slickNext");
    });

    $('.slide-turisticos').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });

    $('.prev-cursos').on('click', function(){
      $('.slide-cursos').slick("slickPrev");
    });

    $('.next-cursos').on('click', function(){
      $('.slide-cursos').slick("slickNext");
    });

    $('.slide-cursos').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });

  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
