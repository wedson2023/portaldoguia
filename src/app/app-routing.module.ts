import { GuiaComercialComponent } from './guia-comercial/guia-comercial.component';
import { AgendaDeEventosComponent } from './agenda-de-eventos/agenda-de-eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'quem-somos', component : QuemSomosComponent },
  { path : 'noticias', component : NoticiasComponent },
  { path : 'agenda-de-eventos', component : AgendaDeEventosComponent },
  { path : 'guia-comercial', component : GuiaComercialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
