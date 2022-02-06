import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEspeceListComponent } from './transferEspece-list.component';

describe('TransferListComponent', () => {
  let component: TransferEspeceListComponent;
  let fixture: ComponentFixture<TransferEspeceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEspeceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEspeceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
