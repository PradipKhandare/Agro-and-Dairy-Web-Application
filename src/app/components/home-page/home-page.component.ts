import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatTooltipModule, CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  customersReview: any[] = []

  constructor(public dialog: MatDialog, public router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.fetchCustomersReview()
  }

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '600px',
    });
  }

  fetchCustomersReview() {
    this.reviewService.fetchCustomerReview().subscribe((response) => {
      console.log("response : ", response)
      this.customersReview = [...response]
      console.log("this.customersReview : ", this.customersReview)
    })
  }

}
