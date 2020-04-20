import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor() { }

  getMovingAverage(data: number[], days: number): number[] {
    const movingAvg: number[] = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let startIndex = 0;
    for (let i = days; i <= data.length; i++) {
      movingAvg.push(+(data.slice(startIndex, i).reduce(reducer) / days).toFixed(2));
      startIndex++;
    }
    return movingAvg;
  }
}
