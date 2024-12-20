import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorloopSwitchComponent } from './foorloop-switch.component';

describe('FoorloopSwitchComponent', () => {
  let component: FoorloopSwitchComponent;
  let fixture: ComponentFixture<FoorloopSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoorloopSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoorloopSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
