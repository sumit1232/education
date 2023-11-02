import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationdataComponent } from './registrationdata.component';

describe('RegistrationdataComponent', () => {
  let component: RegistrationdataComponent;
  let fixture: ComponentFixture<RegistrationdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationdataComponent]
    });
    fixture = TestBed.createComponent(RegistrationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
