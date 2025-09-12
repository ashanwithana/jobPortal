import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualRegister } from './individual-register';

describe('IndividualRegister', () => {
  let component: IndividualRegister;
  let fixture: ComponentFixture<IndividualRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
