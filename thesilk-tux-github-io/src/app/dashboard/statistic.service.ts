import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
  constructor() {}

  getMovingAverage(data: number[], days: number): number[] {
    const movingAvg: number[] = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let startIndex = 0;
    for (let i = days; i <= data.length; i++) {
      movingAvg.push(
        +(data.slice(startIndex, i).reduce(reducer) / days).toFixed(2)
      );
      startIndex++;
    }
    return movingAvg;
  }

  getSummarizedCondfirmed(data: number[], days: number): number[] {
    const sumDays: number[] = [];
    const sumDaysPrev: number[] = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = 1; i < days; i++) {
      console.log(data.slice(0, i).reduce(reducer));
      sumDaysPrev.push(data.slice(0, i).reduce(reducer));
    }

    let startIndex = 0;
    for (let i = days; i <= data.length; i++) {
      sumDays.push(data.slice(startIndex, i).reduce(reducer));
      startIndex++;
    }
    return sumDaysPrev.concat(sumDays);
  }
}
