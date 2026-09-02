import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  standalone: false,
  templateUrl: './ex7.html',
  styleUrl: './ex7.css',
})
export class Ex7 {}
export class AppComponent {
  nome = '';}
  import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';  
import {FormsModule} from '@angular/forms';

import { AppComponent } from './ex7';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  

