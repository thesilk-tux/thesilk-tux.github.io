import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsTotalLineChartComponent } from './deaths-total-line-chart.component';

describe('DeathsTotalLineChartComponent', () => {
  let component: DeathsTotalLineChartComponent;
  let fixture: ComponentFixture<DeathsTotalLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsTotalLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsTotalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
