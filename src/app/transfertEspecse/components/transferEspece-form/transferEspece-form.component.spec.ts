import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEspeceFormComponent } from './transferEspece-form.component';

describe('TransferEspeceFormComponent', () => {
  let component: TransferEspeceFormComponent;
  let fixture: ComponentFixture<TransferEspeceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEspeceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEspeceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
