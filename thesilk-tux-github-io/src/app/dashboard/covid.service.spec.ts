import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CovidService } from './covid.service';

describe('CovidService', () => {
  let service: CovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should extract country data as map', () => {
    const expected = new Map();
    expected.set('Australia', [
      {
        date: '1/22/20',
        confirmed: 3,
        deaths: 0,
        recovered: 5,
        relConfirmed: 0,
        relDeaths: 0,
        relRecovered: 0,
      },
      {
        date: '1/23/20',
        confirmed: 5,
        deaths: 2,
        recovered: 7,
        relConfirmed: 0.6667,
        relDeaths: 0,
        relRecovered: 0.4,
      },
      {
        date: '1/24/20',
        confirmed: 7,
        deaths: 4,
        recovered: 9,
        relConfirmed: 0.4,
        relDeaths: 1,
        relRecovered: 0.2857,
      },
    ]);
    expected.set('Germany', [
      {
        date: '1/22/20',
        confirmed: 5,
        deaths: 2,
        recovered: 2,
        relConfirmed: 0,
        relDeaths: 0,
        relRecovered: 0,
      },
      {
        date: '1/23/20',
        confirmed: 6,
        deaths: 2,
        recovered: 2,
        relConfirmed: 0.2,
        relDeaths: 0,
        relRecovered: 0,
      },
      {
        date: '1/24/20',
        confirmed: 7,
        deaths: 4,
        recovered: 4,
        relConfirmed: 0.1667,
        relDeaths: 1,
        relRecovered: 1,
      },
    ]);

    const dataConfirmed =
      'Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20\nProvence 1,Australia,x,y,2,3,4\nProvence 2,Australia,x,y,1,2,3\n ,Germany,x,y,5,6,7';
    const dataDeaths =
      'Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20\nProvence 1,Australia,x,y,0,2,2\nProvence 2,Australia,x,y,0,0,2\n ,Germany,x,y,2,2,4';
    const dataRecovered =
      'Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20\nProvence 1,Australia,x,y,1,2,3\nProvence 2,Australia,x,y,4,5,6\n ,Germany,x,y,2,2,4';
    const covidMap = service.getCovidData(dataConfirmed, dataDeaths, dataRecovered);
    expect(covidMap).toEqual(expected);
  });
});
