import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../http.service';
declare var $ :any;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit, AfterContentInit {

  noticias;
  constructor(private progresso: NgProgressService, private http: HttpService) {
    this.progresso.start();
  }

  ngOnInit() {
    this.http.ApiGet('noticias/page/listar').subscribe((response:any) => {
      this.noticias = response.resposta;
    }, (err:any) => {
      console.log(err);
    })

    $('div.noticia').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    })
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
