import { TestBed, inject } from '@angular/core/testing';

import { ExamplesfacadesService } from './examplesfacades.service';
import { StoreModule } from '@ngrx/store';

describe('ExamplesfacadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [ExamplesfacadesService]
    });
  });

  it('should be created', inject(
    [ExamplesfacadesService],
    (service: ExamplesfacadesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
