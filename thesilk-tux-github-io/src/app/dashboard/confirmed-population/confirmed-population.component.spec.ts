import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPopulationComponent } from './confirmed-population.component';

describe('ConfirmedPopulationComponent', () => {
  let component: ConfirmedPopulationComponent;
  let fixture: ComponentFixture<ConfirmedPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
