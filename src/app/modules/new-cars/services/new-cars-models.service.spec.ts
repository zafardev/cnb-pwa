import { TestBed, inject } from '@angular/core/testing';

import { NewCarsModelsService } from './new-cars-models.service';

describe('NewCarsModelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewCarsModelsService]
    });
  });

  it('should be created', inject([NewCarsModelsService], (service: NewCarsModelsService) => {
    expect(service).toBeTruthy();
  }));
});
