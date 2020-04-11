import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsNewDailyLineChartComponent } from './deaths-new-daily-line-chart.component';

describe('DeathsNewDailyLineChartComponent', () => {
  let component: DeathsNewDailyLineChartComponent;
  let fixture: ComponentFixture<DeathsNewDailyLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsNewDailyLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsNewDailyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
