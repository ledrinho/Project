import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravilaComponent } from './pravila.component';

describe('PravilaComponent', () => {
  let component: PravilaComponent;
  let fixture: ComponentFixture<PravilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
