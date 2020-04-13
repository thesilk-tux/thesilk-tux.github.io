import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { ConfirmedTotalLineChartComponent } from './confirmed-total-line-chart.component';

describe('ConfirmedTotalLineChartComponent', () => {
  let component: ConfirmedTotalLineChartComponent;
  let fixture: ComponentFixture<ConfirmedTotalLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTotalLineChartComponent, LineChartComponent ],
      imports: [GeneralModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTotalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
