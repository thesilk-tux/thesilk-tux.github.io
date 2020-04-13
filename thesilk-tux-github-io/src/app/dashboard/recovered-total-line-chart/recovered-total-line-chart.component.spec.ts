import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModule } from 'src/app/general/general.module';
import { LineChartComponent } from 'src/app/general/line-chart/line-chart.component';
import { RecoveredTotalLineChartComponent } from './recovered-total-line-chart.component';

describe('RecoveredTotalLineChartComponent', () => {
  let component: RecoveredTotalLineChartComponent;
  let fixture: ComponentFixture<RecoveredTotalLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredTotalLineChartComponent, LineChartComponent ],
      imports: [GeneralModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredTotalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
