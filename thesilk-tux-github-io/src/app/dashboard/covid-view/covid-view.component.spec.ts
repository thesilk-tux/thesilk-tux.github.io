import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CovidViewComponent } from './covid-view.component';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { ConfirmedTotalLineChartComponent } from '../confirmed-total-line-chart/confirmed-total-line-chart.component';
import { ConfirmedNewDailyLineChartComponent } from '../confirmed-new-daily-line-chart/confirmed-new-daily-line-chart.component';
import { ConfirmedTotalRelativeLineChartComponent } from '../confirmed-total-relative-line-chart/confirmed-total-relative-line-chart.component';
import { DeathsTotalLineChartComponent } from '../deaths-total-line-chart/deaths-total-line-chart.component';
import { DeathsNewDailyLineChartComponent } from '../deaths-new-daily-line-chart/deaths-new-daily-line-chart.component';
import { DeathsTotalRelativeLineChartComponent } from '../deaths-total-relative-line-chart/deaths-total-relative-line-chart.component';
import { RecoveredTotalLineChartComponent } from '../recovered-total-line-chart/recovered-total-line-chart.component';
import { RecoveredNewDailyLineChartComponent } from '../recovered-new-daily-line-chart/recovered-new-daily-line-chart.component';
import { GeneralModule } from 'src/app/general/general.module';

describe('CovidViewComponent', () => {
  let component: CovidViewComponent;
  let fixture: ComponentFixture<CovidViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CovidViewComponent,
        DashboardCardComponent,
        ConfirmedTotalLineChartComponent,
        ConfirmedNewDailyLineChartComponent,
        ConfirmedTotalRelativeLineChartComponent,
        DeathsTotalLineChartComponent,
        DeathsNewDailyLineChartComponent,
        DeathsTotalRelativeLineChartComponent,
        RecoveredTotalLineChartComponent,
        RecoveredNewDailyLineChartComponent,
      ],
      imports: [GeneralModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
