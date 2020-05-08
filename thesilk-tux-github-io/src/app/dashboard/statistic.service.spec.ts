import { TestBed } from '@angular/core/testing';

import { StatisticService } from './statistic.service';

describe('StatisticService', () => {
  let service: StatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate moving average', () => {
    const values = [0, 1, 3, 5, 6, 1];
    expect(service.getMovingAverage(values, 3)).toEqual([1.33, 3, 4.67, 4]);
    expect(service.getMovingAverage(values, 2)).toEqual([0.5, 2, 4, 5.5, 3.5]);
  });

  it('should summarize last 3 days', () => {
    const values = [0, 1, 3, 5, 7, 9, 11, 13];
    expect(service.getSummarizedCondfirmed(values, 3)).toEqual([
      0,
      1,
      4,
      9,
      15,
      21,
      27,
      33,
    ]);
    expect(service.getSummarizedCondfirmed(values, 4)).toEqual([
      0,
      1,
      4,
      9,
      16,
      24,
      32,
      40,
    ]);
  });
});
