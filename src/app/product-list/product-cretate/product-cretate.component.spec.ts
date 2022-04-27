import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCretateComponent } from './product-cretate.component';

describe('ProductCretateComponent', () => {
  let component: ProductCretateComponent;
  let fixture: ComponentFixture<ProductCretateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCretateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCretateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
