import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';

const routes: Routes = [
  {path:'addproduct', component:AddproductComponent},
  {path:'listproduct', component:ListproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
