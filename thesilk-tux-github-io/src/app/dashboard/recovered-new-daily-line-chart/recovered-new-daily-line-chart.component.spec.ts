import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredNewDailyLineChartComponent } from './recovered-new-daily-line-chart.component';

describe('RecoveredNewDailyLineChartComponent', () => {
  let component: RecoveredNewDailyLineChartComponent;
  let fixture: ComponentFixture<RecoveredNewDailyLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredNewDailyLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredNewDailyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
