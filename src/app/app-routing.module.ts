import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAlunoComponent } from './paginas/listar-aluno/listar-aluno.component';
import { DashboardPrincipalComponent } from './paginas/dashboard-principal/dashboard-principal.component';

const routes: Routes = [
  { path: '', component: DashboardPrincipalComponent},
  { path: 'listar-aluno', component: ListarAlunoComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
