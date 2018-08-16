import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
declare var $ :any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input('imagens') imagens;

  private g1;
  constructor(
    private http: HttpService,
    private router: Router
  ) {
    this.http.ApiGet('page/get-footer').subscribe((response:any) => {
      let noticia = [];

      for(let x in response.resposta.item)
      {
        let data = new Date(response.resposta.item[x].pubDate);

        response.resposta.item[x].pubDate = data.getHours() + 'h' + data.getMinutes();
        response.resposta.item[x].title = response.resposta.item[x].title.substr(0, 50);
        noticia.push(response.resposta.item[x]);

        if(parseInt(x) >= 3)
        {
          this.g1 = noticia;
          return false;
        }
      }
    });
  }

  ngOnInit() {
    $('a.agenda').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    })
  }

}
