import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ICountryPopulation, ICovidData } from '../covid.interface';
import { StatisticService } from '../statistic.service';

@Component({
  selector: 'app-infected-last-week-population',
  templateUrl: './infected-last-week.component.html',
  styleUrls: ['./infected-last-week.component.scss'],
})
export class InfectedLastWeekPopulationComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() population: ICountryPopulation[];
  @Input() country: string;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor(private statisticService: StatisticService) {}

  ngOnInit(): void {
    this.getDates();
    this.getInfectedLastWeekPopulation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getInfectedLastWeekPopulation();
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

  private getInfectedLastWeekPopulation() {
    this.dataSet[0].data = [];
    if (this.data) {
      const countryPopulation: number = this.population.filter(
        (val) => val.country === this.country
      )[0].population;
      if (this.data.get(this.country)) {
        for (const data of this.statisticService.getSummarizedCondfirmed(
          this.getDailyConfirmed(),
          7
        )) {
          this.dataSet[0].data.push(+(100000 * data / countryPopulation).toFixed(1));
        }
      }
    }
  }

  private getDailyConfirmed(): number[] {
    const data: number[] = [];
    for (const [i, val] of this.data.get(this.country).entries()) {
      if (i > 0) {
        const newConfirmed =
          val.confirmed - this.data.get(this.country)[i - 1].confirmed;
        data.push(newConfirmed);
      } else {
        data.push(0);
      }
    }
    return data;
  }
}
