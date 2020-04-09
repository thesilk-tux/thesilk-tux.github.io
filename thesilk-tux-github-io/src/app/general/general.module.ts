import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HeaderComponent, LineChartComponent, ProfileComponent],
  exports: [HeaderComponent, LineChartComponent, ProfileComponent],
  imports: [AppRoutingModule, ChartsModule, CommonModule],
})
export class GeneralModule {}
