import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DeathsPopulationComponent} from './deaths-population.component';

describe('ConfirmedPopulationComponent', () => {
  let component: DeathsPopulationComponent;
  let fixture: ComponentFixture<DeathsPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
