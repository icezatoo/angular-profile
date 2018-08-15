import { TestBed, inject } from '@angular/core/testing';

import { ExamplesfacadesService } from './examplesfacades.service';

describe('ExamplesfacadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamplesfacadesService]
    });
  });

  it('should be created', inject([ExamplesfacadesService], (service: ExamplesfacadesService) => {
    expect(service).toBeTruthy();
  }));
});
