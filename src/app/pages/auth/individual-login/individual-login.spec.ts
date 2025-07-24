import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLogin } from './individual-login';

describe('IndividualLogin', () => {
  let component: IndividualLogin;
  let fixture: ComponentFixture<IndividualLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
