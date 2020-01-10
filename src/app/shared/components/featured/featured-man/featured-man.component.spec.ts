import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedManComponent } from './featured-man.component';

describe('FeaturedManComponent', () => {
  let component: FeaturedManComponent;
  let fixture: ComponentFixture<FeaturedManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
