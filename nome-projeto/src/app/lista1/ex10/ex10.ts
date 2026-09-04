import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10component {
 
  nomeAluno = '';
  disciplinas = 1;
  mensagemMatricula = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  matricular() {
    this.mensagemMatricula = `Matrícula realizada para ${this.nomeAluno} em ${this.disciplinas} disciplina(s).`;
  }
}

