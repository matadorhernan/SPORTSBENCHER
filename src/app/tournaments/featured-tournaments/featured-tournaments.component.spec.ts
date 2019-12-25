import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTournamentsComponent } from './featured-tournaments.component';

describe('FeaturedTournamentsComponent', () => {
  let component: FeaturedTournamentsComponent;
  let fixture: ComponentFixture<FeaturedTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
