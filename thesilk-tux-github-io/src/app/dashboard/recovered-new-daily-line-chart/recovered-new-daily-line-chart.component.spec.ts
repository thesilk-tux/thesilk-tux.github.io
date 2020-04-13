import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { RecoveredNewDailyLineChartComponent } from './recovered-new-daily-line-chart.component';

describe('RecoveredNewDailyLineChartComponent', () => {
  let component: RecoveredNewDailyLineChartComponent;
  let fixture: ComponentFixture<RecoveredNewDailyLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredNewDailyLineChartComponent, LineChartComponent ],
      imports: [GeneralModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredNewDailyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
