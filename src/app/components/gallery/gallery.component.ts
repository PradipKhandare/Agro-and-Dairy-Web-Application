import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    { src: './assets/farms/farm.jpg', caption: 'Fresh Dairy Farm' },
    { src: './assets/farms/farm1.jpg', caption: 'Fresh Dairy Farm 1' },
    { src: './assets/farms/farm2.jpg', caption: 'Fresh Dairy Farm 2' },
    { src: './assets/farms/farm3.jpg', caption: 'Fresh Dairy Farm 3' },
    { src: './assets/farms/farm4.jpg', caption: 'Fresh Dairy Farm 4' },
    { src: './assets/farms/farm5.jpg', caption: 'Fresh Dairy Farm 5' },
    { src: './assets/farms/farm6.jpg', caption: 'Fresh Dairy Farm 6' },
    { src: './assets/farms/farm7.jpg', caption: 'Fresh Dairy Farm 7' },
    { src: './assets/farms/farm8.jpg', caption: 'Fresh Dairy Farm 8' },
    { src: './assets/farms/farm9.jpg', caption: 'Fresh Dairy Farm 9' },
    { src: './assets/farms/farm10.jpg', caption: 'Fresh Dairy Farm 10' },
    { src: './assets/farms/farm11.jpg', caption: 'Fresh Dairy Farm 11' },
    { src: './assets/farms/farm12.jpg', caption: 'Fresh Dairy Farm 12' },
    { src: './assets/farms/farm13.jpg', caption: 'Fresh Dairy Farm 13' },
    { src: './assets/farms/farm14.jpg', caption: 'Fresh Dairy Farm 14' },
    { src: './assets/farms/farm15.jpg', caption: 'Fresh Dairy Farm 15' },
    { src: './assets/farms/farm16.jpg', caption: 'Fresh Dairy Farm 16' },
    { src: './assets/farms/farm17.jpg', caption: 'Fresh Dairy Farm 17' },
    { src: './assets/farms/farm18.jpg', caption: 'Fresh Dairy Farm 18' },
    { src: './assets/farms/farm19.jpg', caption: 'Fresh Dairy Farm 19' },
    { src: './assets/farms/farm20.jpg', caption: 'Fresh Dairy Farm 20' },
    { src: './assets/farms/farm21.jpg', caption: 'Fresh Dairy Farm 21' },
    { src: './assets/farms/farm22.jpg', caption: 'Fresh Dairy Farm 22' },
    { src: './assets/farms/farm23.jpg', caption: 'Fresh Dairy Farm 23' },
    { src: './assets/farms/farm24.jpg', caption: 'Fresh Dairy Farm 24' },
    { src: './assets/farms/farm25.jpg', caption: 'Fresh Dairy Farm 25' },
    { src: './assets/farms/farm26.jpg', caption: 'Fresh Dairy Farm 26' },
    { src: './assets/farms/farm27.jpg', caption: 'Fresh Dairy Farm 27' },
    { src: './assets/farms/farm28.jpg', caption: 'Fresh Dairy Farm 28' },
    { src: './assets/farms/farm29.jpg', caption: 'Fresh Dairy Farm 29' },
    { src: './assets/farms/farm30.jpg', caption: 'Fresh Dairy Farm 30' },
    { src: './assets/farms/farm31.jpg', caption: 'Fresh Dairy Farm 31' },

  ];


  selectedIndex: number | null = null;
  scale: number = 1;

  open(index: number): void {
    this.selectedIndex = index;
    this.scale = 1; // Reset zoom
  }

  close(): void {
    this.selectedIndex = null;
  }

  next(): void {
    if (this.selectedIndex !== null && this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
      this.scale = 1; // Reset zoom
    }
  }

  prev(): void {
    if (this.selectedIndex !== null && this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scale = 1; // Reset zoom
    }
  }

  zoomIn(): void {
    this.scale += 0.2;
  }

  zoomOut(): void {
    if (this.scale > 0.4) this.scale -= 0.2;
  }
}
