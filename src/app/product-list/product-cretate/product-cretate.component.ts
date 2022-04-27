import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-cretate',
  templateUrl: './product-cretate.component.html',
  styleUrls: ['./product-cretate.component.css']
})
export class ProductCretateComponent implements OnInit {
  product: Product = {};
  @Output()
  evenCreate = new EventEmitter<Product>()
  constructor() { }

  ngOnInit() {
  }

  createProduct(productForm) {
    this.evenCreate.emit(this.product)
    console.log(productForm.value())
  }
}
