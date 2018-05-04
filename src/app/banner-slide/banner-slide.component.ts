import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-slide',
  templateUrl: './banner-slide.component.html',
  styleUrls: ['./banner-slide.component.sass']
})
export class BannerSlideComponent implements OnInit {

  @Input() imagens:object;

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.imagens);
  }

}
