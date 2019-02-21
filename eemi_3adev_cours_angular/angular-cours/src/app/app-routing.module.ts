import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DistributorComponent} from './distributor/distributor.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: DistributorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
