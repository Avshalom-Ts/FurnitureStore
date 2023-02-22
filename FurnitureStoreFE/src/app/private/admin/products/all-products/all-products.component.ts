import { Component } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  categories: string[] = [
    'Leaving room',
    'Bed Rooms',
    'Children Rooms',
    'Home Decorations',
  ];

  addProduct = new FormGroup({
    id: new FormControl(''),
    category: new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
  });

  onSubmit() {
    console.log(this.addProduct.value);
  }

  itemsList: Product[] = [
    {
      id: 1,
      category: 'Leaving room',
      productName: 'Sofa',
      price: 100,
      description: 'Sofa',
      quantity: 10,
    },
  ];
}
