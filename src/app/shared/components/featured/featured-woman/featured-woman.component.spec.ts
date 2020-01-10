import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWomanComponent } from './featured-woman.component';

describe('FeaturedWomanComponent', () => {
  let component: FeaturedWomanComponent;
  let fixture: ComponentFixture<FeaturedWomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedWomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
