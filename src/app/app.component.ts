import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public slide;

  public slide300x350;

  public banner300x350_01;
  public banner300x350_02;
  public banner300x350_03;

  public banner300x250_01;
  public banner300x250_02;
  public banner300x250_03;
  public banner300x250_04;

  constructor(private http: HttpService){
    moment.locale('pt-BR');

    this.http.ApiGet('banner').subscribe((response:any) => {
      this.slide = {
        '_300x100' : response.resposta['300x100'],
        '_600x100' : response.resposta['600x100']
      };

      this.slide300x350 = response.resposta['300x350'];

      this.banner300x350_01 = response.resposta['300x350'][0].imagem;
      this.banner300x350_02 = response.resposta['300x350'][1].imagem;
      this.banner300x350_03 = response.resposta['300x350'][2].imagem;

      this.banner300x250_01 = response.resposta['300x250'][0].imagem;
      this.banner300x250_02 = response.resposta['300x250'][1].imagem;
      this.banner300x250_03 = response.resposta['300x250'][2].imagem;
      this.banner300x250_04 = response.resposta['300x250'][3].imagem;

    });
  }
}
