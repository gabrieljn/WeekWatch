import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { SeriesComponent } from './components/series/series.component';


const routes: Routes = [
  {path: '', component: TelaPrincipalComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'series', component: SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
