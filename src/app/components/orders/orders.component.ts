import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  products = [
    { name: 'Tomatoes', description: 'Organic crops directly from the farm.', icon: './assets/crops.jpg', status: 'In Transit' },
    { name: 'Carrots', description: 'Organic crops directly from the farm.', icon: './assets/crops.jpg', status: 'In Transit' },
    { name: 'Lettuce', description: 'Organic crops directly from the farm.', icon: './assets/crops.jpg', status: 'In Transit' },
    { name: 'Potatoes', description: 'Organic crops directly from the farm.', icon: './assets/crops.jpg', status: 'In Transit' },
    { name: 'Spinach', description: 'Organic crops directly from the farm.', icon: './assets/crops.jpg', status: 'Delivered Successfully' },
    { name: 'Milk', description: 'Fresh dairy items like milk, butter, and cheese.', icon: './assets/milk.jpg', status: 'Out of Stock' },
    { name: 'Cheese', description: 'Fresh dairy items like milk, butter, and cheese.', icon: './assets/milk.jpg', status: 'Out of Stock' },
    { name: 'Yogurt', description: 'Fresh dairy items like milk, butter, and cheese.', icon: './assets/milk.jpg', status: 'Out of Stock' },
    { name: 'Evian', description: 'Pure and clean water in bottles.', icon: './assets/water.jpg', status: 'In Transit' },
    { name: 'Fiji Water', description: 'Pure and clean water in bottles.', icon: './assets/water.jpg', status: 'In Transit' },
    { name: 'Succulents', description: 'Beautiful plants to brighten up your home.', icon: './assets/plants.jpg', status: 'Delivered Successfully' },
    { name: 'Oranges', description: 'Fresh and seasonal fruits.', icon: './assets/fruits.jpg', status: 'Delivered Successfully' },
    { name: 'Lemons', description: 'Fresh and seasonal fruits.', icon: './assets/fruits.jpg', status: 'Delivered Successfully' }
  ];


  orderStatus(oroduct: any) {

  }
}
