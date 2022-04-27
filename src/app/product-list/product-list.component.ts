import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [] = [
    {
      id: 1,
      name: 'Iphone 12',
      price: 12000,
      description: 'New'
    },
    {
      id: 2,
      name: 'Iphone 13',
      price: 15000,
      description: 'New'
    },
    {
      id: 3,
      name: 'Iphone 13 Promax',
      price: 200000,
      description: 'New'
    }
  ];
  isShowCreateForm = false;
  isShowEditForm = false;
  isShowDeleteForm = false;
  currentProduct: Product = {};

  changeStateCreate() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  changeStateEdit(product) {
    this.isShowEditForm = !this.isShowEditForm;
    this.currentProduct = product;
  }
  changeStateDelete(product) {
    this.isShowDeleteForm = !this.isShowDeleteForm;
    this.currentProduct = product;
  }

  constructor() {
  }

  ngOnInit() {
  }

  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
    this.isShowEditForm = false
  }

  createProduct(product) {
    this.products.push(product)
    this.isShowCreateForm = false;
  }


  deleteProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products.splice(index, 1);
    this.isShowDeleteForm = false;
  }
}
