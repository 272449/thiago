import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLivros } from './cadastro-livros';

describe('CadastroLivros', () => {
  let component: CadastroLivros;
  let fixture: ComponentFixture<CadastroLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
