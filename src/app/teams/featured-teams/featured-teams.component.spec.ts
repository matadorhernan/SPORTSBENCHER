import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTeamsComponent } from './featured-teams.component';

describe('FeaturedTeamsComponent', () => {
  let component: FeaturedTeamsComponent;
  let fixture: ComponentFixture<FeaturedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
