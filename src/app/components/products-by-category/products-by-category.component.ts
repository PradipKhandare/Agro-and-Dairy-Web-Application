import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})
export class ProductsByCategoryComponent {


  products = [
    {
      name: 'Carrots',
      brand: 'Fresh carrots from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/carrots.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Tomatoes',
      brand: 'Fresh tomatoes from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/tomatoes.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Green Spinach',
      brand: 'Fresh green spinach from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/green-spinach.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Sweet Corn',
      brand: 'Fresh sweet corn from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/sweet-corn.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Tomatoes',
      brand: 'Fresh tomatoes from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/tomatoes.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Green Spinach',
      brand: 'Fresh green spinach from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/green-spinach.jpeg',
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Tomatoes',
      brand: 'Fresh tomatoes from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/tomatoes.jpeg', // Replace with actual URL
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Sweet Corn',
      brand: 'Fresh sweet corn from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/sweet-corn.jpeg', // Replace with actual URL
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Carrots',
      brand: 'Fresh carrots from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/carrots.jpeg', // Replace with actual URL
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
    {
      name: 'Green Spinach',
      brand: 'Fresh green spinach from the farm directly',
      price: 105,
      originalPrice: 152,
      discount: 31,
      image: '/assets/specific-products/green-spinach.jpeg', // Replace with actual URL
      favorite: false,
      sizes: ['100 gms', '250 gms', '500 gms']
    },
  ];


  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
  }

  toggleFavorite(product: any) {
    product.favorite = !product.favorite;
  }
}
