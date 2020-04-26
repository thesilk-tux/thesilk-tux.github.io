import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductionFactorLineChartComponent } from './reproduction-factor-line-chart.component';

describe('ReproductionFactorLineChartComponent', () => {
  let component: ReproductionFactorLineChartComponent;
  let fixture: ComponentFixture<ReproductionFactorLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproductionFactorLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductionFactorLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
