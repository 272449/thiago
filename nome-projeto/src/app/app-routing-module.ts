import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
  path: 'aluno',
  loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
},
{
  path: 'lista1',
  loadChildren: () => import('./lista1/lista1-module').then(m => m.Lista1module)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
