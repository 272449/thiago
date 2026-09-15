interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}
const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Teclado',
    preco: 120,
    quantidade: 5,
    promocao: true
  },
  {
    id: 2,
    nome: 'Mouse',
    preco: 80,
    quantidade: 10,
    promocao: false
  },
  {
    id: 3,
    nome: 'Monitor',
    preco: 900,
    quantidade: 3,
    promocao: true
  },
  {
    id: 4,
    nome: 'Headset',
    preco: 250,
    quantidade: 7,
    promocao: false
  },
  {
    id: 5,
    nome: 'Webcam',
    preco: 300,
    quantidade: 0,
    promocao: true
  }
];
function alternarPromocao(produto: Produto) {
  produto.promocao = !produto.promocao;
}