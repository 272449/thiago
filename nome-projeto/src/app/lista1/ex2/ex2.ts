import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.css',
})
export class Ex2 {}
export class Appcomponent{
  produto = 'teclado';
  preco = '1500';
  quantidade = 3;
}