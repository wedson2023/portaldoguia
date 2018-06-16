import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.sass']
})
export class EventoComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
