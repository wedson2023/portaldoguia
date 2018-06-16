import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements AfterContentInit {

  constructor(private progresso: NgProgressService) { 
    this.progresso.start();
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
