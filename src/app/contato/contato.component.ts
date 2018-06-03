import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
