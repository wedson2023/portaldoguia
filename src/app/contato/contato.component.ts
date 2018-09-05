import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent implements OnInit, AfterContentInit {
  contato = {
    nome : null,
    email : null,
    telefone : null,
    estado : null,
    cidade : null,
    mensagem : null,
  };
  constructor(
    private progresso: NgProgressService,
    private http: HttpService
  ) {
    this.progresso.start();
   }

  ngOnInit() {
  }

  cadastrar(dados){

    if(!this.contato.nome || !this.contato.email || !this.contato.mensagem || !this.contato.cidade || !this.contato.estado)
    {
      alert('Todos os campos são obrigatórios');
    }
    else
    {
      this.progresso.start();
      this.http.ApiPost('contatos/cadastrar', dados).subscribe((response:any) => {
        this.contato = {
          nome : null,
          email : null,
          telefone : null,
          estado : null,
          cidade : null,
          mensagem : null,
        };
        this.progresso.done();
        alert('Cadastro realizado com sucesso.');
      });
    }
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
