import { TestBed, inject } from '@angular/core/testing';

import { ProfilefacadesService } from './profilefacades.service';

describe('ProfilefacadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilefacadesService]
    });
  });

  it('should be created', inject([ProfilefacadesService], (service: ProfilefacadesService) => {
    expect(service).toBeTruthy();
  }));
});
