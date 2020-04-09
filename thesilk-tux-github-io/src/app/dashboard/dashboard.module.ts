import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeneralModule } from '../general/general.module';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [
    CovidViewComponent,
    DashboardCardComponent,
  ],
  imports: [CommonModule, GeneralModule],
})
export class DashboardModule {}
