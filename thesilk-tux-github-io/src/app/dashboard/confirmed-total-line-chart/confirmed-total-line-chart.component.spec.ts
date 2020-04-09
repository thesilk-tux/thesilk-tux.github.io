import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedTotalLineChartComponent } from './confirmed-total-line-chart.component';

describe('ConfirmedTotalLineChartComponent', () => {
  let component: ConfirmedTotalLineChartComponent;
  let fixture: ComponentFixture<ConfirmedTotalLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTotalLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTotalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
