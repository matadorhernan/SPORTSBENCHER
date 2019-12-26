import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsGridComponent } from './tournaments-grid.component';

describe('TournamentsGridComponent', () => {
  let component: TournamentsGridComponent;
  let fixture: ComponentFixture<TournamentsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
