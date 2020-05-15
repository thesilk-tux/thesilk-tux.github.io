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

@Component({
  selector: 'app-deaths-population',
  templateUrl: './deaths-population.component.html',
  styleUrls: ['./deaths-population.component.scss'],
})
export class DeathsPopulationComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() population: ICountryPopulation[];
  @Input() country: string;
  @Input() timeFilter = 0;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getDeathsPopulation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getDeathsPopulation();
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

  private getDeathsPopulation() {
    this.dataSet[0].data = [];
    if (this.data) {
      const countryPopulation: number = this.population.filter(
        (val) => val.country === this.country
      )[0].population;
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.dataSet[0].data.push(
            (100000 * data.deaths) / countryPopulation
          );
        }
      }
    }
  }
}
