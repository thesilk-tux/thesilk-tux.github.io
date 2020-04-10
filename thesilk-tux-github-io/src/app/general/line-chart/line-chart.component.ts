import { Component, Input } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ChartDataSets, ChartOptions } from 'chart.js';
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

  faChartLine = faChartLine;

  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.28)',
      borderColor: 'black',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  private axisType = 'linear';

  constructor() {
    this.lineChartOptions = this.getChartOptions();
  }

  onChartType(axisType: string) {
    this.axisType = axisType;
    this.lineChartOptions = this.getChartOptions();
  }

  private getChartOptions(): ChartOptions {
    return {
      responsive: true,
      scales: {
        yAxes: [{ type: this.axisType, position: 'left' }],
      },
    };
  }
}
