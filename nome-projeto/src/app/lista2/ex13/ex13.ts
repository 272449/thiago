interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

export class Ex13Component {
  tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: 'Criar banco de dados',
    responsavel: 'João',
    prioridade: 'alta',
    concluida: false
  },
  {
    id: 2,
    titulo: 'Criar tela inicial',
    responsavel: 'Maria',
    prioridade: 'média',
    concluida: true
  },
  {
    id: 3,
    titulo: 'Testar sistema',
    responsavel: 'Carlos',
    prioridade: 'alta',
    concluida: false
  },
  {
    id: 4,
    titulo: 'Documentar projeto',
    responsavel: 'Ana',
    prioridade: 'baixa',
    concluida: false
  },
  {
    id: 5,
    titulo: 'Corrigir erros',
    responsavel: 'Pedro',
    prioridade: 'alta',
    concluida: true
  },
  {
    id: 6,
    titulo: 'Publicar sistema',
    responsavel: 'Lucas',
    prioridade: 'média',
    concluida: false
  }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  get tarefasConcluidas(): number {
    return this.tarefas.filter(
      tarefa => tarefa.concluida
    ).length;
  }

  get tarefasPendentes(): number {
    return this.tarefas.filter(
      tarefa => !tarefa.concluida
    ).length;
  }
}
