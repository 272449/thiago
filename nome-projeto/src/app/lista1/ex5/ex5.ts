import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  templateUrl: './ex5.html',
  styleUrl: './ex5.css',
})
export class Ex5 {}
export class AppComponent {
  curtidas = 0;

  curtida() {
    this.curtidas++;
  }
}