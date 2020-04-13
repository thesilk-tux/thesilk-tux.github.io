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
  selector: 'app-deaths-total-relative-line-chart',
  templateUrl: './deaths-total-relative-line-chart.component.html',
  styleUrls: ['./deaths-total-relative-line-chart.component.scss'],
})
export class DeathsTotalRelativeLineChartComponent
  implements OnChanges, OnInit {
  @Input() data: Map<string, any[]>;
  @Input() country: string;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getConfirmedNewDaily();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getConfirmedNewDaily();
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

  private getConfirmedNewDaily() {
    this.dataSet[0].data = [];
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.dataSet[0].data.push(100 * data.relDeaths);
        }
      }
    }
  }
}
