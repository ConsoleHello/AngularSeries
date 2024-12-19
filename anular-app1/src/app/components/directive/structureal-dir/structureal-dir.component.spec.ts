import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurealDirComponent } from './structureal-dir.component';

describe('StructurealDirComponent', () => {
  let component: StructurealDirComponent;
  let fixture: ComponentFixture<StructurealDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructurealDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurealDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
