import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-deaths-total-line-chart',
  templateUrl: './deaths-total-line-chart.component.html',
  styleUrls: ['./deaths-total-line-chart.component.scss']
})
export class DeathsTotalLineChartComponent implements OnChanges, OnInit {
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
          this.dataSet[0].data.push(data.deaths);
        }
      }
    }
  }
}
