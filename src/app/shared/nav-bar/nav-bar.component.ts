import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(public router: Router) { }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToHome() {
    this.router.navigate(['/homepage']);
  }

  navigateToOrders() {
    this.router.navigate(['/orders']);
  }
  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  navigateToAboutUs() {
    this.router.navigate(['/about-us']);
  }
}
