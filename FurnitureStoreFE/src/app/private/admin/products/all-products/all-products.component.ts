import { Component } from '@angular/core';
import { Product } from '../product';

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
