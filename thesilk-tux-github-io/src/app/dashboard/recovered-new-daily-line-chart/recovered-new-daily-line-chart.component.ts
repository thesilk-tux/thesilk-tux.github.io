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
  selector: 'app-recovered-new-daily-line-chart',
  templateUrl: './recovered-new-daily-line-chart.component.html',
  styleUrls: ['./recovered-new-daily-line-chart.component.scss']
})
export class RecoveredNewDailyLineChartComponent implements OnChanges, OnInit {
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
    if ('data' in changes) {
      this.getDates();
      this.getConfirmedNewDaily();
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

  private getConfirmedNewDaily() {
    if (this.data) {
      if (this.data.get(this.country)) {
        for (const [i, val] of this.data.get(this.country).entries()) {
          if (i > 0) {
            const newRecovered =
              (val.recovered - this.data.get(this.country)[i - 1].recovered);
            this.dataSet[0].data.push(newRecovered);
          } else {
            this.dataSet[0].data.push(0);
          }
        }
      }
    }
  }
}
