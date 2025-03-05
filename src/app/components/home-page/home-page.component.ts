import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatTooltipModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(public dialog: MatDialog, public router: Router) { }

  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '600px',
    });
  }

}
