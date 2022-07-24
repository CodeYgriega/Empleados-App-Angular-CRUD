import { TestBed } from '@angular/core/testing';

import { ComunicarParaEditarService } from './comunicar-para-editar.service';

describe('ComunicarParaEditarService', () => {
  let service: ComunicarParaEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicarParaEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
