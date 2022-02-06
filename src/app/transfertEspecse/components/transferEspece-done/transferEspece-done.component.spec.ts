import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEspeceDoneComponent } from './transferEspece-done.component';

describe('TransferEspeceDoneComponent', () => {
  let component: TransferEspeceDoneComponent;
  let fixture: ComponentFixture<TransferEspeceDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEspeceDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEspeceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
