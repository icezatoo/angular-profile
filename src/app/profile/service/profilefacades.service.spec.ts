import { TestBed, inject } from '@angular/core/testing';

import { ProfilefacadesService } from './profilefacades.service';
import { StoreModule } from '@ngrx/store';
describe('ProfilefacadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [ProfilefacadesService]
    });
  });

  it('should be created', inject(
    [ProfilefacadesService],
    (service: ProfilefacadesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
