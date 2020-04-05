import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CovidViewComponent } from './covid-view.component';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

describe('CovidViewComponent', () => {
  let component: CovidViewComponent;
  let fixture: ComponentFixture<CovidViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidViewComponent, DashboardCardComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
