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
    let sl3 = window.innerWidth >= 1024 ? 3 : 1;
    $('.slide-slick-3').slick({
        slidesToShow: sl3,
        slidesToScroll: sl3,
        arrows: false
      });

    $('.prev').on('click', function(){
      $('.slide-slick-3').slick("slickPrev");
    });

    $('.next').on('click', function(){
      $('.slide-slick-3').slick("slickNext");
    });

    let quantidade = window.innerWidth >= 1024 ? 6 : 2;

    $('.slide-slick-6').slick({
      slidesToShow: quantidade,
      slidesToScroll: quantidade,
      arrows: window.innerWidth >= 1024 ? true : false,
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
