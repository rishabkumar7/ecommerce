import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomwComponent } from '../welcomw/welcomw.component';
import { ProductComponent } from '../product/product.component';


const routes: Routes = [{
  path: '',
  component: WelcomwComponent,
},
{
  path: 'product',
  component: ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
