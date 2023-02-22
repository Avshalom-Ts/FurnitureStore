import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { AllProductsComponent } from './admin/products/all-products/all-products.component';
import { EditProductsComponent } from './admin/products/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'all-products',
        component: AllProductsComponent,
      },
      {
        path: 'edit-product',
        component: EditProductsComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
