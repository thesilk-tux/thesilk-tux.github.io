import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { ConfirmedTotalRelativeLineChartComponent } from './confirmed-total-relative-line-chart.component';

describe('ConfirmedTotalRelativeLineChartComponent', () => {
  let component: ConfirmedTotalRelativeLineChartComponent;
  let fixture: ComponentFixture<ConfirmedTotalRelativeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTotalRelativeLineChartComponent, LineChartComponent ],
      imports: [GeneralModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTotalRelativeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
