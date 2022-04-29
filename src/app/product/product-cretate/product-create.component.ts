import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-cretate',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) {
  }

  product: Product = {};

  ngOnInit() {
  }

  createProduct(productForm) {
    if (productForm.valid) {
      this.productService.createProduct(productForm.value).subscribe(() =>{
        alert('Tạo mới thành công')
      }, error => {
        console.log(error)
      });
      this.router.navigateByUrl('/products');
    } else {
      alert('xay ra loi');
    }
  }
}
