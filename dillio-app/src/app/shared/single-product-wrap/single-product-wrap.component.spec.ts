import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductWrapComponent } from './single-product-wrap.component';

describe('SingleProductWrapComponent', () => {
  let component: SingleProductWrapComponent;
  let fixture: ComponentFixture<SingleProductWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
