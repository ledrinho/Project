import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeogradTabelaComponent } from './beograd-tabela.component';

describe('BeogradTabelaComponent', () => {
  let component: BeogradTabelaComponent;
  let fixture: ComponentFixture<BeogradTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeogradTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeogradTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
