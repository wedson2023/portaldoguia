import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit{
  private imagens_slide:object;

  constructor(){

  }

  ngOnInit(){
    this.imagens_slide = {
      'imagem1' : './assets/imagens/banner/600x100.jpg',
      'imagem2' : './assets/imagens/banner/600x100.jpg',
      'imagem3' : './assets/imagens/banner/600x100.jpg'
    }
  }
}
