import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

import { Countries } from '../covid.enum';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.scss'],
})
export class CovidViewComponent implements OnInit {
  country = 'Germany';
  lastUpdate = new Date().toLocaleString();
  countries = Countries;
  keys: any[];

  private favoriteCountries: string[] = ['Germany'];

  covidData: Map<string, any[]>;
  private lenCovidData = 1;

  constructor(private covidService: CovidService) {
    this.keys = Object.keys(this.countries);
    this.country = Countries.Deutschland;
  }

  ngOnInit(): void {
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

  onCountryChange(event: any) {
    this.country = event.target.value;
  }

  private getDateLastEntry() {
    this.lastUpdate = this.covidData.get(this.country)[
      this.lenCovidData - 1
    ].date;
  }
}
