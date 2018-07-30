import { Component, OnInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-detalhe-noticias',
  templateUrl: './detalhe-noticias.component.html',
  styleUrls: ['./detalhe-noticias.component.sass']
})
export class DetalheNoticiasComponent implements OnInit {

  noticias;
  relacionados;
  constructor(
    private progresso: NgProgressService,
    private route: ActivatedRoute
  ) { 
    this.noticias = this.route.snapshot.data.data.resposta;
    this.relacionados = this.route.snapshot.data.data.relacionados;

    this.progresso.start();
  }

  ngOnInit() {
    $('div.template').html(this.noticias.template);   

    $('body').on('click', 'article', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }) 
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
