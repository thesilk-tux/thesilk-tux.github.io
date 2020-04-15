import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICovidData, ICountryPopulation } from './covid.interface';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private urlGithubRaw =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/';

  constructor(private http: HttpClient) {}

  getCountryPopulation(): Observable<ICountryPopulation[]> {
    return this.http.get<ICountryPopulation[]>('assets/countries.json');
  }

  getCovidData(
    dataConfirmed: string,
    dataDeaths: string,
    dataRecovered: string
  ): any {
    let date: string[] = dataConfirmed.split('\n')[0].split(',');
    date = date.slice(4, date.length);

    const countryConfirmedRaw: string[] = dataConfirmed.split('\n');
    countryConfirmedRaw.shift();
    const countryDeathsRaw: string[] = dataDeaths.split('\n');
    countryDeathsRaw.shift();
    const countryRecoveredRaw: string[] = dataRecovered.split('\n');
    countryRecoveredRaw.shift();

    const covidData = new Map();
    let countryData: ICovidData[] = [];

    for (let idx = 0; idx < countryConfirmedRaw.length; idx++) {
      countryData = [];
      const confirmeRaw = countryConfirmedRaw[idx].split(',');
      const deathsRaw = countryDeathsRaw[idx].split(',');
      const country = confirmeRaw[1];

      // collect all country data of recovered and sum that because recovered csv colums
      // doesn't match with confirmed and deaths
      // don't handle recovered in sum method
      // TODO: handle also confirmed and deaths like recovered because it is
      //       more resilent
      const recoveredRaw = this.getRecoveredCountryData(
        countryRecoveredRaw,
        country
      );

      for (let i = 4; i < confirmeRaw.length; i++) {
        let relConfirmed = 0;
        let relDeaths = 0;
        let relRecovered = 0;
        if (i > 4) {
          relConfirmed = this.calcRelative(
            +confirmeRaw[i],
            +confirmeRaw[i - 1]
          );
          relDeaths = this.calcRelative(+deathsRaw[i], +deathsRaw[i - 1]);
          relRecovered = this.calcRelative(
            +recoveredRaw[i],
            +recoveredRaw[i - 1]
          );
        }
        countryData.push({
          date: date[i - 4],
          confirmed: +confirmeRaw[i],
          relConfirmed,
          deaths: +deathsRaw[i],
          relDeaths,
          recovered: +recoveredRaw[i],
          relRecovered,
        });
      }
      if (covidData.get(country) === undefined) {
        covidData.set(country, countryData);
      } else {
        covidData.set(
          country,
          this.sumCountryData(country, covidData, countryData)
        );
      }
    }

    return covidData;
  }

  private getRecoveredCountryData(data: string[], country: string): string[] {
    const countryRecoveredData: number[] = new Array(
      data[1].split(',').length - 4
    ).fill(0);
    for (const countryData of data) {
      if (country === countryData.split(',')[1]) {
        for (const [i, v] of countryData
          .split(',')
          .slice(4, countryData.split(',').length)
          .entries()) {
          countryRecoveredData[i] = countryRecoveredData[i] + +v;
        }
      }
    }
    return ['', country, '', ''].concat(countryRecoveredData.map(String));
  }

  getConfirmedCovidRawData(): Observable<any> {
    const csvFile = 'time_series_covid19_confirmed_global.csv';
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(this.urlGithubRaw + csvFile, {
      headers,
      responseType: 'text',
    });
  }

  getDeathsCovidRawData(): Observable<any> {
    const csvFile = 'time_series_covid19_deaths_global.csv';
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(this.urlGithubRaw + csvFile, {
      headers,
      responseType: 'text',
    });
  }

  getRecoveredCovidRawData(): Observable<any> {
    const csvFile = 'time_series_covid19_recovered_global.csv';
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(this.urlGithubRaw + csvFile, {
      headers,
      responseType: 'text',
    });
  }

  private calcRelative(cur: number, prev: number): number {
    if (prev > 0) {
      return +(cur / prev - 1).toFixed(4);
    }
    return 0;
  }

  private sumCountryData(
    country: string,
    confirmed: Map<string, any[]>,
    data: ICovidData[]
  ) {
    const sumData: any[] = [];
    for (const [i, v] of confirmed.get(country).entries()) {
      let relConfirmed = 0;
      let relDeaths = 0;

      if (i > 0) {
        relConfirmed = this.calcRelative(
          v.confirmed + data[i].confirmed,
          confirmed.get(country)[i - 1].confirmed + data[i - 1].confirmed
        );
        relDeaths = this.calcRelative(
          v.deaths + data[i].deaths,
          confirmed.get(country)[i - 1].deaths + data[i - 1].deaths
        );
      }
      sumData.push({
        date: v.date,
        confirmed: v.confirmed + data[i].confirmed,
        deaths: v.deaths + data[i].deaths,
        recovered: v.recovered,
        relConfirmed,
        relDeaths,
        relRecovered: v.relRecovered,
      });
    }
    return sumData;
  }
}
