import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandP500ChartComponent } from './sand-p500-chart.component';

describe('SandP500ChartComponent', () => {
  let component: SandP500ChartComponent;
  let fixture: ComponentFixture<SandP500ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandP500ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandP500ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
