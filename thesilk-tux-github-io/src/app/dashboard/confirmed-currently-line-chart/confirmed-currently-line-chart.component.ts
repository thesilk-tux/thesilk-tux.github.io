import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {ICovidData} from '../covid.interface';

@Component({
  selector: 'app-confirmed-currently-line-chart',
  templateUrl: './confirmed-currently-line-chart.component.html',
  styleUrls: ['./confirmed-currently-line-chart.component.scss']
})
export class ConfirmedCurrentlyLineChartComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() country: string;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getConfirmedCurrently();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getConfirmedCurrently();
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

  private getConfirmedCurrently() {
    this.dataSet[0].data = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
            this.dataSet[0].data.push(data.confirmed - data.deaths - data.recovered);
        }
      }
    }
  }
}
