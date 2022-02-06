import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBenefComponent } from './client-benef.component';

describe('ClientBenefComponent', () => {
  let component: ClientBenefComponent;
  let fixture: ComponentFixture<ClientBenefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBenefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
