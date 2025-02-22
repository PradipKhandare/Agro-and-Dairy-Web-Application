import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {  MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatTooltipModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(public dialog: MatDialog) { }


  openContactUsDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '600px',
    });
  }

  openChatBot() {

  }

}
