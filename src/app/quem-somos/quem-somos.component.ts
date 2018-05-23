import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.sass']
})
export class QuemSomosComponent implements AfterContentInit {

  constructor(private progresso: NgProgressService) { 
    this.progresso.start();
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
