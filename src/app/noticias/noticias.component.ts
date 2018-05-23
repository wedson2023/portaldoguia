import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) { 
    this.progresso.start();
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
