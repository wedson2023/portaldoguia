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

  noticia;
  constructor(
    private progresso: NgProgressService,
    private route: ActivatedRoute
  ) { 
    this.noticia = this.route.snapshot.data.data.resposta.template;
    this.progresso.start();
  }

  ngOnInit() {
    $('div.template').html(this.noticia);    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
