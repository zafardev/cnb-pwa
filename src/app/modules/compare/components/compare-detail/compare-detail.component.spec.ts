import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDetailComponent } from './compare-detail.component';

describe('CompareDetailComponent', () => {
  let component: CompareDetailComponent;
  let fixture: ComponentFixture<CompareDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
