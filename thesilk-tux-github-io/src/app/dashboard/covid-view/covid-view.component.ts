import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.scss'],
})
export class CovidViewComponent implements OnInit {
  private covidData: Map<string, any[]>;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getCovidRawData().subscribe((res) => {
      this.covidData = this.covidService.getCovidData(res);
    });
  }

  getRelativeIncreasingRate(country: string): number {
    if (this.covidData !== undefined) {
      const lengthData = this.covidData.get(country).length;
      return (
        (100 *
          (this.covidData.get(country)[lengthData - 1].confirmed -
            this.covidData.get(country)[lengthData - 2].confirmed)) /
        this.covidData.get(country)[lengthData - 1].confirmed
      );
    }
    return 0;
  }

  getLatestConfirmedNumber(country: string): number {
    if (this.covidData !== undefined) {
      const lengthData = this.covidData.get(country).length;
      return this.covidData.get(country)[lengthData - 1].confirmed;
    }
    return 0;
  }
}
