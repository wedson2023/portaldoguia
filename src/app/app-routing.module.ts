import { PaginasComponent } from './guia-comercial/paginas/paginas.component';
import { DetalheNoticiasComponent } from './noticias/detalhe-noticias/detalhe-noticias.component';
import { EventoComponent } from './evento/evento.component';
import { DetalhesComponent } from './guia-comercial/detalhes/detalhes.component';
import { AnuncieComponent } from './anuncie/anuncie.component';
import { ContatoComponent } from './contato/contato.component';
import { GuiaComercialComponent } from './guia-comercial/guia-comercial.component';
import { AgendaDeEventosComponent } from './agenda-de-eventos/agenda-de-eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { NoticiaResolverService } from './noticias/detalhe-noticias/noticia-resolver.service';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'quem-somos', component : QuemSomosComponent },
  { path : 'noticias/:url', component : DetalheNoticiasComponent, resolve : { data : NoticiaResolverService } },
  { path : 'noticias', component : NoticiasComponent },
  { path : 'agenda-de-eventos', component : AgendaDeEventosComponent },
  { path : 'guia-comercial/:id', component : DetalhesComponent },
  { path : 'guia-comercial', component : GuiaComercialComponent, 
    children : [
      { path : '', component : PaginasComponent  },  
      { path : 'pagina/:pagina', component : PaginasComponent  },          
    ] 
  },
  { path : 'anuncie', component : AnuncieComponent },
  { path : 'contato', component : ContatoComponent },
  { path : 'evento', component : EventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
