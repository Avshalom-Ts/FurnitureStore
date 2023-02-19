import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminModule, PrivateRoutingModule],
  exports: [AdminModule],
})
export class PrivateModule {}
