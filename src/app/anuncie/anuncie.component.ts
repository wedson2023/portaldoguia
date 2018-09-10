import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-anuncie',
  templateUrl: './anuncie.component.html',
  styleUrls: ['./anuncie.component.sass']
})
export class AnuncieComponent implements OnInit, AfterContentInit {
  categorias;
  segmentos
  dados = {
    segmento_id : '',
    telefones : null,
    nome : null,
    endereco : null,
    bairro : null,
    cidade : null,
    ativo : 0,
    destaque : 0,
    contato : {
      email : null
    }
  };
  constructor(
    private progresso: NgProgressService,
    private http: HttpService
  ) {
    this.progresso.start();
   }

  cadastrar(empresa){
    if(!empresa.nome || !empresa.contato.email || !empresa.segmento_id || !empresa.cidade || !empresa.estado)
    {
      alert('Todos os campos são obrigatórios');
    }
    else
    {
      this.progresso.start();
      this.http.ApiPost('guia-comercial/cadastro', empresa).subscribe((response:any) => {
        alert('Cadastro realizado com sucess.');

        this.dados = {
          segmento_id : '',
          telefones : null,
          nome : null,
          endereco : null,
          bairro : null,
          cidade : null,
          ativo : 0,
          destaque : 0,
          contato : {
            email : null
          }
        };

        this.progresso.done();
      });
    }
  }

  segmento(categoria){
    if(categoria)
    {
      this.progresso.start();
      this.http.ApiGet('segmentos-por-categoria/' + categoria).subscribe((response:any) => {
        this.dados.segmento_id = '';
        this.segmentos = response.resposta;
        this.progresso.done();
      });
    }
  }

  ngOnInit() {
    this.http.ApiGet('categorias/listar-todos').subscribe((response:any) => {
      this.categorias = response.registros.data;
    });
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
