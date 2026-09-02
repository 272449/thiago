import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemLivros } from './listagem-livros/listagem-livros';
import { CadastroLivros } from './cadastro-livros/cadastro-livros';

const routes: Routes = [
  { path: 'listagem-livros', component: ListagemLivros },
  { path: 'cadastro-livros', component: CadastroLivros }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
