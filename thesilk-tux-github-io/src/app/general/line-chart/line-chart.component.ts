import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() topic: string;
  @Input() dataValues: ChartDataSets[] = [{ data: [] }];
  @Input() dataLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,255,0,0.28)',
      borderColor: 'black',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() {}
}
