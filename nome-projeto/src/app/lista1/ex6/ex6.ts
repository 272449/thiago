import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {}
export class AppComponent {
  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }
  diminuir() {if (this.quantidade > 0) {
    this.quantidade--;
  }
}
}