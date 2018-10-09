import { Component, OnInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent {

  empresa;
  empresa_id;
  constructor(private route: ActivatedRoute, private progresso: NgProgressService, private http: HttpService) {
    this.progresso.start();
    this.route.params.subscribe(params => {
      this.empresa_id = +params['id'];
      this.http.ApiGet('guia-comercial/listar/' + this.empresa_id).subscribe((response:any) => {
        this.empresa = response.resposta;
        this.progresso.done();
      }, err => {
        this.progresso.done();
      });
   });

  }

}
