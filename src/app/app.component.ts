import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tech-management-group';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    const noNavbarRoutes = ['/login', '/sign-up', '/dashboard', '/products-category'];
    this.showNavbar = !noNavbarRoutes.includes(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !noNavbarRoutes.includes(event.url);
      }
    });
  }


  navigateToChatBot() {
    console.log('Navigating to chatbot...');
    this.router.navigate(['/chatbot']);
  }
}
