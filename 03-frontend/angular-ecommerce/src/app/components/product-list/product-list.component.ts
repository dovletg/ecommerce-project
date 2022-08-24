import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //set up a property it is array
  products: Product[] = [];

  //inject our ProductService
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  //Method is invoked once you subscribe
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data; //assign results to the Product array
      }
    )
  }

}
