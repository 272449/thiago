nomeProduto = 'Teclado';
quantidadeEstoque = 5;

adicionarEstoque(); {
  this.quantidadeEstoque++;
}

removerEstoque(); {
  if (this.quantidadeEstoque > 0) {
    this.quantidadeEstoque--;
  }
}