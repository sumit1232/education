import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerdataComponent } from './trainerdata.component';

describe('TrainerdataComponent', () => {
  let component: TrainerdataComponent;
  let fixture: ComponentFixture<TrainerdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerdataComponent]
    });
    fixture = TestBed.createComponent(TrainerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
