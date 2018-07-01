import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';
declare var $, jQuery :any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.sass']
})
export class GaleriaComponent implements OnInit, AfterContentInit  {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngAfterContentInit(){
    this.progresso.done();
  }

  ngOnInit() {
    $('#myCarousel').carousel({
      interval: 5000
    });

    //Handles the carousel thumbnails

    $('[id^=carousel-selector-]').click(function () {
      var id_selector = $(this).attr("id");
      try {
      var id = /-(\d+)$/.exec(id_selector)[1];
      console.log(id_selector, id);
      jQuery('#myCarousel').carousel(parseInt(id));
      } catch (e) {
        console.log('Regex failed!', e);
      }
      });
      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
            var id = $('.item.active').data('slide-number');
            $('#carousel-text').html($('#slide-content-'+id).html());
      });
  }

}
