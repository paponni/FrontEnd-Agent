import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferByStatus } from './transferByStatus.component';

describe('TransferListComponent', () => {
  let component: TransferByStatus;
  let fixture: ComponentFixture<TransferByStatus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferByStatus ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferByStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
