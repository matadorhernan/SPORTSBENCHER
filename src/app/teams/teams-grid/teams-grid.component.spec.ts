import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGridComponent } from './teams-grid.component';

describe('TeamsGridComponent', () => {
  let component: TeamsGridComponent;
  let fixture: ComponentFixture<TeamsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
