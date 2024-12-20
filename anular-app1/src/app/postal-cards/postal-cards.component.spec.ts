import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCardsComponent } from './postal-cards.component';

describe('PostalCardsComponent', () => {
  let component: PostalCardsComponent;
  let fixture: ComponentFixture<PostalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostalCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
