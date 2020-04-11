import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedTotalRelativeLineChartComponent } from './confirmed-total-relative-line-chart.component';

describe('ConfirmedTotalRelativeLineChartComponent', () => {
  let component: ConfirmedTotalRelativeLineChartComponent;
  let fixture: ComponentFixture<ConfirmedTotalRelativeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTotalRelativeLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTotalRelativeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
