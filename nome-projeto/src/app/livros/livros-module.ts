import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { CadastroLivros } from './cadastro-livros/cadastro-livros';
import { ListagemLivros } from './listagem-livros/listagem-livros';

@NgModule({
  declarations: [CadastroLivros, ListagemLivros],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
