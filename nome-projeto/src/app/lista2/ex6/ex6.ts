nomesIniciais = [
  'João',
  'Maria',
  'Carlos',
  'Ana',
  'Pedro'
];

nomes = [...this.nomesIniciais];

removerUltimo(); {
  this.nomes.pop();
}

limparLista(); {
  this.nomes = [];
}

restaurarLista(); {
  this.nomes = [...this.nomesIniciais];
}