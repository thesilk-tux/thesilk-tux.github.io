import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ICovidData } from '../covid.interface';
import { StatisticService } from '../statistic.service';

@Component({
  selector: 'app-reproduction-factor-line-chart',
  templateUrl: './reproduction-factor-line-chart.component.html',
  styleUrls: ['./reproduction-factor-line-chart.component.scss'],
})
export class ReproductionFactorLineChartComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() country: string;
  @Input() timeFilter = 0;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  private movingAverage: number[] = [];

  constructor(private statisticsService: StatisticService) {}

  ngOnInit(): void {
    this.getDates();
    this.movingAverage = this.getMovingAverage();
    this.getReproductionsFactor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.movingAverage = this.getMovingAverage();
    this.getReproductionsFactor();
  }

  private getDates() {
    this.labels = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.labels.push(data.date);
        }
        this.labels = this.labels.slice(4);
      }
    }
  }

  private getReproductionsFactor() {
    this.dataSet[0].data = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (let i = 3; i <= this.movingAverage.length - 1; i++) {
          const r =
            this.movingAverage[i - 3] <= 1
              ? 0
              : +(this.movingAverage[i] / this.movingAverage[i - 3]).toFixed(2);
          this.dataSet[0].data.push(r);
        }
      }
    }
  }

  private getMovingAverage(): number[] {
    const values: number[] = [];
    if (this.data) {
      const countryData = this.data.get(this.country);
      for (let i = 0; i <= countryData.length - 2; i++) {
        values.push(countryData[i + 1].confirmed - countryData[i].confirmed);
      }

      const trailingZeros = new Array(6).fill(0);
      return trailingZeros.concat(
        this.statisticsService.getMovingAverage(values, 7)
      );
    }
  }
}
