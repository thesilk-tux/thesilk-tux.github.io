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
    expect(service.getMovingAverage(values, 3)).toEqual([4 / 3, 3, 14 / 3, 4]);
    expect(service.getMovingAverage(values, 2)).toEqual([0.5, 2, 4, 5.5, 3.5]);
  });
});
