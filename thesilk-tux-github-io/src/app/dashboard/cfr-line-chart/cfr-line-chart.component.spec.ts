import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfrLineChartComponent } from './cfr-line-chart.component';

describe('CfrLineChartComponent', () => {
  let component: CfrLineChartComponent;
  let fixture: ComponentFixture<CfrLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfrLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfrLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
