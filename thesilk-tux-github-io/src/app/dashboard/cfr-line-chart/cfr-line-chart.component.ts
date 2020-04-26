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

@Component({
  selector: 'app-cfr-line-chart',
  templateUrl: './cfr-line-chart.component.html',
  styleUrls: ['./cfr-line-chart.component.scss']
})
export class CfrLineChartComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() country: string;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getCaseFatalityRate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getCaseFatalityRate();
  }

  private getDates() {
    this.labels = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.labels.push(data.date);
        }
      }
    }
  }

  private getCaseFatalityRate() {
    this.dataSet[0].data = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.dataSet[0].data.push(
            +(100 * data.deaths / data.confirmed).toFixed(2)
          );
        }
      }
    }
  }
}
