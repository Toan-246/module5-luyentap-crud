import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required)
  });

  constructor(private productService: ProductService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) =>{
      const id = paraMap.get('id');
      this.getProductById(id);
    })
  }
  getProductById (id){
    this.productService.getProductById(id).subscribe(productBE => {
      this.product = productBE;
      this.idControl.setValue(this.product.id);
      this.nameControl.setValue(this.product.name);
      this.priceControl.setValue(this.product.price);
      this.descriptionControl.setValue(this.product.description);
    });
  }
  get idControl (){
    return this.productForm.get('id')
  }
  get nameControl(){
    return this.productForm.get('name')
  }
  get priceControl(){
    return this.productForm.get('price')
  }
  get descriptionControl() {
    return this.productForm.get('description');
  }
  ngOnInit() {

  }

  editProduct(productForm) {
    this.productService.editProduct(this.product.id, productForm.value).subscribe(() =>{
      alert('Cập nhật thành công')
    }, error => {
      console.log(error);
    })
    this.router.navigateByUrl('/products')
  }
}
