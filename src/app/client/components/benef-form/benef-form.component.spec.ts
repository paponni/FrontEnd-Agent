import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefFormComponent } from './benef-form.component';

describe('BenefFormComponent', () => {
  let component: BenefFormComponent;
  let fixture: ComponentFixture<BenefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
