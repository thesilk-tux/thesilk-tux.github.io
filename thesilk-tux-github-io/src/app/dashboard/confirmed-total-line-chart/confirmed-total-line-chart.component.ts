import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-confirmed-total-line-chart',
  templateUrl: './confirmed-total-line-chart.component.html',
  styleUrls: ['./confirmed-total-line-chart.component.scss'],
})
export class ConfirmedTotalLineChartComponent implements OnChanges, OnInit {
  @Input() data: Map<string, any[]>;
  @Input() country: string;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getConfirmedTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      this.getDates();
      this.getConfirmedTotal();
    }
  }

  private getDates() {
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.labels.push(data.date);
        }
      }
    }
  }

  private getConfirmedTotal() {
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.dataSet[0].data.push(data.confirmed);
        }
      }
    }
  }
}
