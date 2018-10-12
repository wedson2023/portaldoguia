import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute  } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterContentInit {

  link;
  registros:any;
  constructor(
    private progresso: NgProgressService,
    private http: HttpService,
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer
  ) {
    this.registros = this.route.snapshot.data.data.resposta;
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.snapshot.data.data.resposta.videos.link);
    this.progresso.start();
  }

  ngOnInit() {
    $('a').not('.fixed').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1);
    })

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
