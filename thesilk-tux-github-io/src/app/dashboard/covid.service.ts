import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface ICovidData {
  date: string;
  confirmed: number;
  relConfirmed: number;
  deaths: number;
  relDeaths: number;
}

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private urlGithubRaw =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/';

  constructor(private http: HttpClient) {}

  public getCovidData(dataConfirmed: string, dataDeaths: string): any {
    let date: string[] = dataConfirmed.split('\n')[0].split(',');
    date = date.slice(4, date.length);

    const countryConfirmedRaw: string[] = dataConfirmed.split('\n');
    countryConfirmedRaw.shift();
    const countryDeathsRaw: string[] = dataDeaths.split('\n');
    countryDeathsRaw.shift();

    const covidData = new Map();
    let countryData: ICovidData[] = [];

    for (let idx = 0; idx < countryConfirmedRaw.length; idx++) {
      countryData = [];
      const confirmeRaw = countryConfirmedRaw[idx].split(',');
      const deathsRaw = countryDeathsRaw[idx].split(',');
      const country = confirmeRaw[1];
      for (let i = 4; i < confirmeRaw.length; i++) {
        let relConfirmed = 0;
        let relDeaths = 0;
        if (i > 4) {
          relConfirmed = this.calcRelative(
            +confirmeRaw[i],
            +confirmeRaw[i - 1]
          );
          relDeaths = this.calcRelative(+deathsRaw[i], +deathsRaw[i - 1]);
        }
        countryData.push({
          date: date[i - 4],
          confirmed: +confirmeRaw[i],
          relConfirmed,
          deaths: +deathsRaw[i],
          relDeaths,
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

  private calcRelative(cur, prev): number {
    if (cur > 0) {
      return +((cur - prev) / cur).toFixed(4);
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
        relConfirmed,
        relDeaths,
      });
    }
    return sumData;
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
}
