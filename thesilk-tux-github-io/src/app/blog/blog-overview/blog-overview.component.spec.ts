import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from 'src/app/general/profile/profile.component';
import { BlogOverviewComponent } from './blog-overview.component';

describe('BlogOverviewComponent', () => {
  let component: BlogOverviewComponent;
  let fixture: ComponentFixture<BlogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogOverviewComponent, ProfileComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
