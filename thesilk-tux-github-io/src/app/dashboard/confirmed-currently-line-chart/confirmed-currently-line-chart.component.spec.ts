import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedCurrentlyLineChartComponent } from './confirmed-currently-line-chart.component';

describe('ConfirmedCurrentlyLineChartComponent', () => {
  let component: ConfirmedCurrentlyLineChartComponent;
  let fixture: ComponentFixture<ConfirmedCurrentlyLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedCurrentlyLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedCurrentlyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
