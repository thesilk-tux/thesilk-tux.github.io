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
  selector: 'app-confirmed-population',
  templateUrl: './confirmed-population.component.html',
  styleUrls: ['./confirmed-population.component.scss'],
})
export class ConfirmedPopulationComponent implements OnChanges, OnInit {
  @Input() data: Map<string, ICovidData[]>;
  @Input() population: ICountryPopulation[];
  @Input() country: string;
  @Input() timeFilter = 0;

  labels: Label[] = [];
  dataSet: ChartDataSets[] = [{ data: [] }];

  constructor() {}

  ngOnInit(): void {
    this.getDates();
    this.getConfirmedPopulation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDates();
    this.getConfirmedPopulation();
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

  private getConfirmedPopulation() {
    this.dataSet[0].data = [];
    if (this.data) {
      const countryPopulation: number = this.population.filter(
        (val) => val.country === this.country
      )[0].population;
      if (this.data.get(this.country)) {
        for (const data of this.data.get(this.country)) {
          this.dataSet[0].data.push(
            (100000 * data.confirmed) / countryPopulation
          );
        }
      }
    }
  }
}
