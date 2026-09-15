interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

produtos: Produto = [
  {
    id: 1,
    nome: 'Teclado',
    preco: 120,
    quantidade: 5
  },
  {
    id: 2,
    nome: 'Mouse',
    preco: 80,
    quantidade: 10
  },
  {
    id: 3,
    nome: 'Monitor',
    preco: 900,
    quantidade: 3
  },
  {
    id: 4,
    nome: 'Headset',
    preco: 250,
    quantidade: 7
  },
  {
    id: 5,
    nome: 'Webcam',
    preco: 300,
    quantidade: 0
  }
];