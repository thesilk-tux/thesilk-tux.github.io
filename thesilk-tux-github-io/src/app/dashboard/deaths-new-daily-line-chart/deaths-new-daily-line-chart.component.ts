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
  selector: 'app-deaths-new-daily-line-chart',
  templateUrl: './deaths-new-daily-line-chart.component.html',
  styleUrls: ['./deaths-new-daily-line-chart.component.scss']
})
export class DeathsNewDailyLineChartComponent implements OnChanges, OnInit {
  @Input() data: Map<string, any[]>;
  @Input() country: string;
  @Input() timeFilter = 0;

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
        for (const [i, val] of this.data.get(this.country).entries()) {
          if (i > 0) {
            const newDeaths =
              (val.deaths - this.data.get(this.country)[i - 1].deaths);
            this.dataSet[0].data.push(newDeaths);
          } else {
            this.dataSet[0].data.push(0);
          }
        }
      }
    }
  }
}
