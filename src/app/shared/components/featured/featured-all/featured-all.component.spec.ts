import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAllComponent } from './featured-all.component';

describe('FeaturedAllComponent', () => {
  let component: FeaturedAllComponent;
  let fixture: ComponentFixture<FeaturedAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
