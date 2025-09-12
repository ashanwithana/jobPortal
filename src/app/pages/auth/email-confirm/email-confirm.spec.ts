import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirm } from './email-confirm';

describe('EmailConfirm', () => {
  let component: EmailConfirm;
  let fixture: ComponentFixture<EmailConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
