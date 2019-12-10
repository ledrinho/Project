import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAndp500TabelaComponent } from './s-andp500-tabela.component';

describe('SAndp500TabelaComponent', () => {
  let component: SAndp500TabelaComponent;
  let fixture: ComponentFixture<SAndp500TabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAndp500TabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAndp500TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
