import { TestBed } from '@angular/core/testing';

import { TransferEspeceService } from './transferEspece.service';

describe('TransferService', () => {
  let service: TransferEspeceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferEspeceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
