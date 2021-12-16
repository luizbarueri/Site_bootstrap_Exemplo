import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { ServicoComponent } from './servico/servico.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "servico",
    component: ServicoComponent
  },
  {
    path: "mapa",
    component: MapaComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "backend",
    component: BackendComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
