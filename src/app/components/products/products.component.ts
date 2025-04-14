import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  constructor(public router: Router, private productsService: ProductsService) { }

  ngOnInit(){
    this.productsService.fetchAllProdcutsCategory().subscribe((response)=>{
      console.log("response : ", response);
    })
  }

  navigateToASpecificProductListByCategory() {
    this.router.navigate(['/specific-product']);
  }

}
