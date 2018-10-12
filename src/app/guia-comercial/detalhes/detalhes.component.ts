import { Component, OnInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  link;
  empresa;
  empresa_id;
  galeria;
  constructor(private sanitizer:DomSanitizer, private route: ActivatedRoute, private progresso: NgProgressService, private http: HttpService) {
    this.progresso.start();
    this.route.params.subscribe(params => {
      this.empresa_id = +params['id'];
      this.http.ApiGet('guia-comercial/listar/' + this.empresa_id).subscribe((response:any) => {
        this.empresa = response.resposta;
        this.galeria = response.resposta.galeria.length;
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(response.resposta.videos.link);
        $('div.template').html(response.resposta.template);
        this.progresso.done();
      }, err => {
        this.progresso.done();
      });
   });

  }

  ngOnInit(){

  }

}
