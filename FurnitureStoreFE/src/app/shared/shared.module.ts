import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivateModule } from '../private/private.module';
import { PrivateRoutingModule } from '../private/private-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, PrivateModule, PrivateRoutingModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
