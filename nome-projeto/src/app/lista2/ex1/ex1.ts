import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}