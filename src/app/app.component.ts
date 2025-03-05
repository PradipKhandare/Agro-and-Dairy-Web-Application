import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  constructor(private router: Router) { }

  navigateToChatBot() {
    console.log('Navigating to chatbot...');
    this.router.navigate(['/chatbot']);
  }
}
