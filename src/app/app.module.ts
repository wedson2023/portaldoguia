import { NoticiaResolverService } from './noticias/detalhe-noticias/noticia-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from 'ng2-progressbar';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

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
import { DetalhesComponent } from './guia-comercial/detalhes/detalhes.component';
import { EventoComponent } from './evento/evento.component';
import { DetalheNoticiasComponent } from './noticias/detalhe-noticias/detalhe-noticias.component';
import { HomeResolverService } from './home/home.resolver.service';

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
    AnuncieComponent,
    DetalhesComponent,
    EventoComponent,
    DetalheNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpService, NoticiaResolverService, HomeResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
