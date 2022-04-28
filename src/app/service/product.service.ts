import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  constructor() {
  }

  getAll (){
    return this.products;
  }

  getProductById (id){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id){
        return this.products[i];
      }
    }
  }
  createProduct (product){
    this.products.push(product)
  }

  editProduct (id, product){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id){
        this.products[i] = product
      }
    }
    return null;
  }
  deleteProduct (id){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id){
        this.products.splice(i, 1)
        return;
      }
    }
  }
}
