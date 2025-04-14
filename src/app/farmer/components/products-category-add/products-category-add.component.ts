import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-category-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-category-add.component.html',
  styleUrl: './products-category-add.component.scss'
})
export class ProductsCategoryAddComponent {

  constructor(private productService: ProductsService) { }

  productGroupName = '';
  productGroupSaved = false;

  newItem = {
    name: '',
    info: '',
    price_before_discount: 0,
    price_after_discount: 0,
    sizes: ['']
  };

  savedGroupName = '';


  submitProductGroup() {
    const payload = { product_group_name: this.productGroupName };
    this.productService.addProductsByCategory(payload).subscribe({
      next: (res: any) => {
        this.savedGroupName = this.productGroupName;
        this.productGroupSaved = true;
      },
      error: () => alert('Error saving product group!')
    });
  }

  addSize() {
    this.newItem.sizes.push('');
  }

  removeSize(index: number) {
    this.newItem.sizes.splice(index, 1);
  }

  submitItem() {
    this.productService.addItemToGroup(this.savedGroupName, this.newItem).subscribe({
      next: () => {
        alert('Item added!');
        this.newItem = { name: '', info: '', price_before_discount: 0, price_after_discount: 0, sizes: [''] };
      },
      error: () => alert('Error adding item!')
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
