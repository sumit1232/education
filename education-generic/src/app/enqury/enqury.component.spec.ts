import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquryComponent } from './enqury.component';

describe('EnquryComponent', () => {
  let component: EnquryComponent;
  let fixture: ComponentFixture<EnquryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquryComponent]
    });
    fixture = TestBed.createComponent(EnquryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
