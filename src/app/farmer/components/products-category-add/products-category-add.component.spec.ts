import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryAddComponent } from './products-category-add.component';

describe('ProductsCategoryAddComponent', () => {
  let component: ProductsCategoryAddComponent;
  let fixture: ComponentFixture<ProductsCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
