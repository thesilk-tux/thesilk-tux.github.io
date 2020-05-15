import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

import { Countries } from '../covid.enum';
import { ICovidData, ICountryPopulation } from '../covid.interface';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.scss'],
})
export class CovidViewComponent implements OnInit {
  lastUpdate = new Date().toLocaleString();
  country: string;
  countries = Countries;
  keys: any[];

  timefilter: Map<number, string> = new Map();
  currentTimeFilter = 0;

  covidData: Map<string, ICovidData[]>;
  population: ICountryPopulation[] = [];

  private lenCovidData = 1;

  constructor(private covidService: CovidService) {
    this.keys = Object.keys(this.countries);
    this.country = Countries.Deutschland;
    this.timefilter.set(0, 'Alle Daten');
    this.timefilter.set(7, 'Letzten 7 Tage');
    this.timefilter.set(14, 'Letzten 14 Tage');
    this.timefilter.set(30, 'Letzten 30 Tage');
  }

  ngOnInit(): void {
    this.covidService.getCountryPopulation().subscribe((resPopulation) => {
      this.covidService.getConfirmedCovidRawData().subscribe((resConfirmed) => {
        this.covidService.getDeathsCovidRawData().subscribe((resDeaths) => {
          this.covidService
            .getRecoveredCovidRawData()
            .subscribe((resRecovered) => {
              this.covidData = this.covidService.getCovidData(
                resConfirmed,
                resDeaths,
                resRecovered
              );
              this.lenCovidData = this.covidData.get(this.country).length;
              this.getDateLastEntry();
              this.population = resPopulation;
            });
        });
      });
    });
  }

  getLastConfirmed(): number {
    if (this.covidData) {
      return this.covidData.get(this.country)[this.lenCovidData - 1].confirmed;
    }
    return 0;
  }

  getLastConfirmedRelative(): number {
    if (this.covidData !== undefined) {
      return (
        100 *
        this.covidData.get(this.country)[this.lenCovidData - 1].relConfirmed
      );
    }
    return 0;
  }

  getLastDeaths(): number {
    if (this.covidData) {
      return this.covidData.get(this.country)[this.lenCovidData - 1].deaths;
    }
    return 0;
  }

  getLastDeathsRelative(): number {
    if (this.covidData !== undefined) {
      return (
        100 * this.covidData.get(this.country)[this.lenCovidData - 1].relDeaths
      );
    }
    return 0;
  }

  getLastRecovered(): number {
    if (this.covidData) {
      return this.covidData.get(this.country)[this.lenCovidData - 1].recovered;
    }
    return 0;
  }

  getLastRecoveredRelative(): number {
    if (this.covidData !== undefined) {
      return (
        100 *
        this.covidData.get(this.country)[this.lenCovidData - 1].relRecovered
      );
    }
    return 0;
  }

  getLastCFR(): number {
    if (this.covidData) {
      return +(
        (100 * this.covidData.get(this.country)[this.lenCovidData - 1].deaths) /
        this.covidData.get(this.country)[this.lenCovidData - 1].confirmed
      ).toFixed(2);
    }
    return 0;
  }

  getTimeFilterKeys(): number[] {
    const keys: number[] = [];
    for (const key of this.timefilter.keys()) {
      keys.push(key);
    }
    return keys;
  }

  onCountryChange(event: any) {
    this.country = event.target.value;
  }

  onTimeFilterChange(event: any) {
    this.currentTimeFilter = event.target.value;
  }

  private getDateLastEntry() {
    this.lastUpdate = this.covidData.get(this.country)[
      this.lenCovidData - 1
    ].date;
  }
}
