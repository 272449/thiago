export class Ex12Component {
  novoNome = '';
  novaQuantidade: number | null = null;

  mensagemErro = '';

  cadastrarProduto() {

    this.mensagemErro = '';

    if (!this.novoNome.trim()) {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (
      this.novaQuantidade === null ||
      this.novaQuantidade < 0
    ) {
      this.mensagemErro =
        'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length + 1,
      nome: this.novoNome,
      preco: 0,
      quantidade: this.novaQuantidade,
      promocao: false
    };

    this.produtos.push(novoProduto);

    this.novoNome = '';
    this.novaQuantidade = null;
  }

  excluirProduto(id: number) {

    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );

  }
}