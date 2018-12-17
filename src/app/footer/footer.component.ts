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

  public g1;
  public eventos;
  public cartaz;
  constructor(
    private http: HttpService,
    private router: Router
  ) {
    this.http.ApiGet('page/get-footer').subscribe((response:any) => {
      let noticia = [];

      this.eventos = response.resposta.eventos;

      for(let x in response.resposta.g1.item)
      {
        let data = new Date(response.resposta.g1.item[x].pubDate);

        response.resposta.g1.item[x].pubDate = data.getHours() + 'h' + data.getMinutes();
        response.resposta.g1.item[x].title = response.resposta.g1.item[x].title.substr(0, 50);
        noticia.push(response.resposta.g1.item[x]);

        if(parseInt(x) >= 3)
        {
          this.g1 = noticia;
          return false;
        }
      }
    });
  }

  verCartaz(cartaz){
    this.cartaz = cartaz;
  }

  closeCartaz(){
    this.cartaz = null;
  }

  ngOnInit() {
    $('a.agenda').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    })
  }

}
