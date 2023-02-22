import { Component } from '@angular/core';

export interface items {
  id: number;
  category: string;
  productName: string;
  price: number;
  description: string;
  quantity: number;
}

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

  itemsList: items[] = [
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
