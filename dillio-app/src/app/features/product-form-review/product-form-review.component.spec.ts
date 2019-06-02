import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormReviewComponent } from './product-form-review.component';

describe('ProductFormReviewComponent', () => {
  let component: ProductFormReviewComponent;
  let fixture: ComponentFixture<ProductFormReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
