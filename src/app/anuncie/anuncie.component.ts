import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-anuncie',
  templateUrl: './anuncie.component.html',
  styleUrls: ['./anuncie.component.sass']
})
export class AnuncieComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }

}
