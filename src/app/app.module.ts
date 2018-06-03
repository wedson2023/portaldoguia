import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from 'ng2-progressbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerSlideComponent } from './banner-slide/banner-slide.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AgendaDeEventosComponent } from './agenda-de-eventos/agenda-de-eventos.component';
import { GuiaComercialComponent } from './guia-comercial/guia-comercial.component';
import { ContatoComponent } from './contato/contato.component';
import { AnuncieComponent } from './anuncie/anuncie.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerSlideComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuemSomosComponent,
    NoticiasComponent,
    AgendaDeEventosComponent,
    GuiaComercialComponent,
    ContatoComponent,
    AnuncieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
