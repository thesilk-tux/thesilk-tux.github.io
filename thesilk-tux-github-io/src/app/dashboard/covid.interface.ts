export interface ICovidData {
  date: string;
  confirmed: number;
  relConfirmed: number;
  deaths: number;
  relDeaths: number;
  recovered: number;
  relRecovered: number;
}

export interface ICountryPopulation {
  country: string;
  population: number;
}
