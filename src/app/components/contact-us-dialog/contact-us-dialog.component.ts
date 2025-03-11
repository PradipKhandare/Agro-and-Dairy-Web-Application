import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-contact-us-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-dialog.component.html',
  styleUrl: './contact-us-dialog.component.scss'
})
export class ContactUsDialogComponent {

  name: string = ''
  review: string = ''

  constructor(private reviewService: ReviewService) { }


  onSubmit() {
    this.reviewService.saveCustomerReview(this.name, this.review).subscribe((response) => {
      console.log(response);
    })
  }

}
