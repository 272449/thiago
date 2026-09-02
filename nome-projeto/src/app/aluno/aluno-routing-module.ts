import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listagem } from './listagem/listagem';
import { Cadastro } from './cadastro/cadastro';

const routes: Routes = [
  { path: 'Listagem', component: Listagem },
  { path: 'Cadastro', component: Cadastro }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
