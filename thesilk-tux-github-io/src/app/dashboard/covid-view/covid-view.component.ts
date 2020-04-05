import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.scss'],
})
export class CovidViewComponent implements OnInit {
  public country = 'Germany';

  private covidData: Map<string, any[]>;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getConfirmedCovidRawData().subscribe((resConfirmed) => {
      this.covidService.getDeathsCovidRawData().subscribe((resDeaths) => {
        this.covidData = this.covidService.getCovidData(
          resConfirmed,
          resDeaths
        );
      });
    });
  }

  getLastConfirmed(): number {
    if (this.covidData) {
      return this.covidData.get(this.country)[
        this.covidData.get(this.country).length - 1
      ].confirmed;
    }
    return 0;
  }

  getLastConfirmedRelative(): number {
    if (this.covidData !== undefined) {
      return 100 * this.covidData.get(this.country)[
        this.covidData.get(this.country).length - 1
      ].relConfirmed;
    }
    return 0;
  }

  getLastDeaths(): number {
    if (this.covidData) {
      return this.covidData.get(this.country)[
        this.covidData.get(this.country).length - 1
      ].deaths;
    }
    return 0;
  }

  getLastDeathsRelative(): number {
    if (this.covidData !== undefined) {
      return 100 * this.covidData.get(this.country)[
        this.covidData.get(this.country).length - 1
      ].relDeaths;
    }
    return 0;
  }

  //getRelativeIncreasingRate(): number {
  //if (this.covidConfirmed !== undefined) {
  //const lengthData = this.covidConfirmed.get(this.country).length;
  //return (
  //(100 *
  //(this.covidConfirmed.get(this.country)[lengthData - 1].confirmed -
  //this.covidConfirmed.get(this.country)[lengthData - 2].confirmed)) /
  //this.covidConfirmed.get(this.country)[lengthData - 1].confirmed
  //);
  //}
  //return 0;
  //}

  //getLatestConfirmedNumber(): number {
  //if (this.covidConfirmed !== undefined) {
  //const lengthData = this.covidConfirmed.get(this.country).length;
  //return this.covidConfirmed.get(this.country)[lengthData - 1].confirmed;
  //}
  //return 0;
  //}

  //getRelativeIncreasingRateDeaths(): number {
  //if (this.covidDeaths !== undefined) {
  //const lengthData = this.covidDeaths.get(this.country).length;
  //return (
  //(100 *
  //(this.covidDeaths.get(this.country)[lengthData - 1].confirmed -
  //this.covidDeaths.get(this.country)[lengthData - 2].confirmed)) /
  //this.covidConfirmed.get(this.country)[lengthData - 1].confirmed
  //);
  //}
  //return 0;
  //}

  //getLatestDeathsNumber(): number {
  //if (this.covidConfirmed !== undefined) {
  //const lengthData = this.covidConfirmed.get(this.country).length;
  //return this.covidConfirmed.get(this.country)[lengthData - 1].confirmed;
  //}
  //return 0;
  //}
}
