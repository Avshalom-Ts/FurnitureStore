import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PrivateRoutingModule } from '../private-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

@NgModule({
  declarations: [AdminDashboardComponent, AddProductComponent, AllProductsComponent, EditProductsComponent],
  imports: [CommonModule, PrivateRoutingModule],
  exports: [],
})
export class AdminModule {}
