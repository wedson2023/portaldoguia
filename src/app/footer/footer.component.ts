import { Component, OnInit, Input } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input('imagens') imagens;

  constructor() {}

  ngOnInit() {
    $('a.agenda').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    })
  }

}
