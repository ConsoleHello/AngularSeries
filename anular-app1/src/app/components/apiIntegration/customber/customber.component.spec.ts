import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomberComponent } from './customber.component';

describe('CustomberComponent', () => {
  let component: CustomberComponent;
  let fixture: ComponentFixture<CustomberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
