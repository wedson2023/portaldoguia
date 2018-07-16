import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public slide_300x350:object;
  
  constructor(private http: HttpService){
    this.slide_300x350 = [
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' },
      { 'imagem' : './assets/imagens/banner/300x350.jpg' }
    ]
  }
}
