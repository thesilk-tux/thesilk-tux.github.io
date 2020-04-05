import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [CovidViewComponent, DashboardCardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
