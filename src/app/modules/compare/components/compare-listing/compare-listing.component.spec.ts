import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareListingComponent } from './compare-listing.component';

describe('CompareListingComponent', () => {
  let component: CompareListingComponent;
  let fixture: ComponentFixture<CompareListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
