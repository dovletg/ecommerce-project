import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[] = []; // defined our property

  constructor(private productService: ProductService) { } // Injected the service

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() { // Invoke the service
    
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data)); // Log data returned from the service
        this.productCategories = data;   // Assigned data to our property
      }
    );
  }

}
