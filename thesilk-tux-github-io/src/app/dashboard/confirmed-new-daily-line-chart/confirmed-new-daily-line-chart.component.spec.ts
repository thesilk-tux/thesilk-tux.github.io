import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { ConfirmedNewDailyLineChartComponent } from './confirmed-new-daily-line-chart.component';

describe('ConfirmedNewDailyLineChartComponent', () => {
  let component: ConfirmedNewDailyLineChartComponent;
  let fixture: ComponentFixture<ConfirmedNewDailyLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedNewDailyLineChartComponent, LineChartComponent ],
      imports: [GeneralModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedNewDailyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
