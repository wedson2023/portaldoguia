import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-guia-comercial',
  templateUrl: './guia-comercial.component.html',
  styleUrls: ['./guia-comercial.component.sass']
})
export class GuiaComercialComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
