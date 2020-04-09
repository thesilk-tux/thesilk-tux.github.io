import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeneralModule } from '../general/general.module';
import { ConfirmedTotalLineChartComponent } from './confirmed-total-line-chart/confirmed-total-line-chart.component';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [
    CovidViewComponent,
    DashboardCardComponent,
    ConfirmedTotalLineChartComponent,
  ],
  imports: [CommonModule, GeneralModule],
})
export class DashboardModule {}
