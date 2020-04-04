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
      { date: '1/22/20', confirmed: 3 },
      { date: '1/23/20', confirmed: 5 },
      { date: '1/24/20', confirmed: 7 },
    ]);
    expected.set('Germany', [
      { date: '1/22/20', confirmed: 5 },
      { date: '1/23/20', confirmed: 6 },
      { date: '1/24/20', confirmed: 7 },
    ]);

    const data =
      'Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20\nProvence 1,Australia,x,y,2,3,4\nProvence 2,Australia,x,y,1,2,3\n ,Germany,x,y,5,6,7';
    const covidMap = service.getCovidData(data);
    expect(covidMap).toEqual(expected);
  });
});
