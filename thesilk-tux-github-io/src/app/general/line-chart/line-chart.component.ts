import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StatisticService } from 'src/app/dashboard/statistic.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges, OnInit {
  @Input() topic: string;
  @Input() dataValues: ChartDataSets[] = [{ data: [] }];
  @Input() dataLabels: Label[] = [];
  @Input() movingAverageDays = 1;
  @Input() chartID: string;

  faCogs = faCogs;

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

  constructor(private statisticService: StatisticService) {
    this.lineChartOptions = this.getChartOptions();
  }

  ngOnInit() {
    this.dataValues[0].label = this.topic;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('dataLabels' in changes && this.movingAverageDays > 1) {
      this.showMovingAverage();
    }
  }

  onChartType(axisType: string) {
    this.axisType = axisType;
    this.lineChartOptions = this.getChartOptions();
  }

  onMovingAverage() {
    this.movingAverageDays === 7
      ? (this.movingAverageDays = 1)
      : (this.movingAverageDays = 7);
    if (this.movingAverageDays === 1 && this.dataValues.length === 2) {
      this.lineChartLegend = false;
      this.dataValues.pop();
    } else {
      this.showMovingAverage();
    }
  }

  getChartTypeLinearID() {
    return 'chartTypeLinear' + this.chartID;
  }

  getChartTypeLogarithmicID() {
    return 'chartTypeLogarithmic' + this.chartID;
  }

  getMovingAverageID() {
    return 'chartMovingAverage' + this.chartID;
  }

  getMovingAverageText() {
    return this.movingAverageDays === 1 ? 'Aktivieren' : 'Deaktivieren';
  }

  private showMovingAverage() {
    this.lineChartLegend = true;

    if (this.dataValues.length === 2) {
      this.dataValues.pop();
    }
    const values: number[] = [];
    for (const item of this.dataValues[0].data) {
      values.push(+item.toString());
    }

    const trailingZeros = new Array(this.movingAverageDays - 1).fill(0);
    const movAvg = trailingZeros.concat(
      this.statisticService.getMovingAverage(values, this.movingAverageDays)
    );
    if (movAvg.length > this.movingAverageDays) {
      this.dataValues.push({ data: movAvg });
      this.dataValues[1].label = 'Gleitender Durchschnitt 7 Tage';
      this.lineChartColors.push({
        backgroundColor: 'rgba(0,250,0,0.28)',
        borderColor: 'black',
      });
    }
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
