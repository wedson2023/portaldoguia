import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public slide_300x350:object;

  constructor() { 
    this.slide_300x350 = [
        { 'imagem' : './assets/imagens/banner/300x350.jpg' },
        { 'imagem' : './assets/imagens/banner/300x350.jpg' },
        { 'imagem' : './assets/imagens/banner/300x350.jpg' }
    ]
  }

  ngOnInit() {
  }

}
