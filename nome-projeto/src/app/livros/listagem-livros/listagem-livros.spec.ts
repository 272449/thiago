import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLivros } from './listagem-livros';

describe('ListagemLivros', () => {
  let component: ListagemLivros;
  let fixture: ComponentFixture<ListagemLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
