import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) =>{
      const id = paraMap.get('id');
      this.getProductById(id);
    })
  }
  getProductById(id) {
    this.productService.getProductById(id).subscribe(productBE => {
      this.product = productBE;
    })

  }
  ngOnInit() {
  }

  submit() {

  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id)
    this.router.navigateByUrl('/products')
  }


}
