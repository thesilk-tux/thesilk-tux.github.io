import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { DeathsTotalRelativeLineChartComponent } from './deaths-total-relative-line-chart.component';

describe('DeathsTotalRelativeLineChartComponent', () => {
  let component: DeathsTotalRelativeLineChartComponent;
  let fixture: ComponentFixture<DeathsTotalRelativeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeathsTotalRelativeLineChartComponent, LineChartComponent],
      imports: [GeneralModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsTotalRelativeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
