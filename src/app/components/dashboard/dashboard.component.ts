import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router){}

  onSelectRole(role: string) {
    if(role == 'customer'){
      this.router.navigate(['sign-up']);
    } else {
      this.router.navigate(['products-category']);
    }
  }


}
