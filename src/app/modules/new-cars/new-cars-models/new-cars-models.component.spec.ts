import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsModelsComponent } from './new-cars-models.component';

describe('NewCarsModelsComponent', () => {
  let component: NewCarsModelsComponent;
  let fixture: ComponentFixture<NewCarsModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
