import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectedLastWeekPopulationComponent } from './infected-last-week.component';

describe('ConfirmedPopulationComponent', () => {
  let component: InfectedLastWeekPopulationComponent;
  let fixture: ComponentFixture<InfectedLastWeekPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectedLastWeekPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectedLastWeekPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
