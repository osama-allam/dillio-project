import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGallerySliderComponent } from './blog-gallery-slider.component';

describe('BlogGallerySliderComponent', () => {
  let component: BlogGallerySliderComponent;
  let fixture: ComponentFixture<BlogGallerySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGallerySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGallerySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
