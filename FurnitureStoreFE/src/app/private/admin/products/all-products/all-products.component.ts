import { Component } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    category: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.addProduct.invalid) return alert('Invalid form');
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
