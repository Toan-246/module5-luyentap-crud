import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Input()
  product: Product = {};
  @Output()
  deleteEven = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submit() {

  }

  deleteProduct() {
    this.deleteEven.emit(this.product);
  }
}
