import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeogradChartComponent } from './beograd-chart.component';

describe('BeogradChartComponent', () => {
  let component: BeogradChartComponent;
  let fixture: ComponentFixture<BeogradChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeogradChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeogradChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
