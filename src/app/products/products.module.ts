import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { ToggleCasePipe } from './pipes/toogle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { canFlyPipe } from './pipes/can-fly.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    // Pipes
    ToggleCasePipe,
    canFlyPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
