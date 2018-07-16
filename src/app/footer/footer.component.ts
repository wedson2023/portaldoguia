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
      window.scrollTo(0,0);
    })
  }

}
