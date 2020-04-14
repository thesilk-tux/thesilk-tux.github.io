import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeneralModule } from '../general/general.module';
import { ConfirmedTotalLineChartComponent } from './confirmed-total-line-chart/confirmed-total-line-chart.component';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ConfirmedNewDailyLineChartComponent } from './confirmed-new-daily-line-chart/confirmed-new-daily-line-chart.component';
import { ConfirmedTotalRelativeLineChartComponent } from './confirmed-total-relative-line-chart/confirmed-total-relative-line-chart.component';
import { DeathsTotalRelativeLineChartComponent } from './deaths-total-relative-line-chart/deaths-total-relative-line-chart.component';
import { DeathsTotalLineChartComponent } from './deaths-total-line-chart/deaths-total-line-chart.component';
import { DeathsNewDailyLineChartComponent } from './deaths-new-daily-line-chart/deaths-new-daily-line-chart.component';
import { RecoveredTotalLineChartComponent } from './recovered-total-line-chart/recovered-total-line-chart.component';
import { RecoveredNewDailyLineChartComponent } from './recovered-new-daily-line-chart/recovered-new-daily-line-chart.component';
import { ConfirmedPopulationComponent } from './confirmed-population/confirmed-population.component';

@NgModule({
  declarations: [
    CovidViewComponent,
    DashboardCardComponent,
    ConfirmedTotalLineChartComponent,
    ConfirmedNewDailyLineChartComponent,
    ConfirmedTotalRelativeLineChartComponent,
    DeathsTotalRelativeLineChartComponent,
    DeathsTotalLineChartComponent,
    DeathsNewDailyLineChartComponent,
    RecoveredTotalLineChartComponent,
    RecoveredNewDailyLineChartComponent,
    ConfirmedPopulationComponent,
  ],
  imports: [CommonModule, GeneralModule],
})
export class DashboardModule {}
