import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  private url =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

  constructor(private http: HttpClient) {}

  public getCovidData(data: string): any {
    let date: string[] = data.split('\n')[0].split(',');
    date = date.slice(4, date.length);

    let confirmeRaw: string[];
    const confirmed = new Map();
    let countryData: any[] = [];

    for (const country of data.split('\n').slice(1, data.length)) {
      countryData = [];
      confirmeRaw = country.split(',');

      for (const [i, v] of confirmeRaw
        .slice(4, confirmeRaw.length)
        .map(Number)
        .entries()) {
        countryData.push({ date: date[i], confirmed: v });
      }

      if (confirmed.get(confirmeRaw[1]) === undefined) {
        confirmed.set(confirmeRaw[1], countryData);
      } else {
        confirmed.set(
          confirmeRaw[1],
          this.sumCountryData(confirmeRaw[1], confirmed, countryData)
        );
      }
    }
    return confirmed;
  }

  getCovidRawData(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(this.url, { headers, responseType: 'text' });
  }

  private sumCountryData(
    country: string,
    confirmed: Map<string, any[]>,
    data: any[]
  ) {
    const sumData: any[] = [];
    for (const [i, v] of confirmed.get(country).entries()) {
      sumData.push({
        date: v.date,
        confirmed: v.confirmed + data[i].confirmed,
      });
    }
    return sumData;
  }
}
