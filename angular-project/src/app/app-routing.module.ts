import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "component1", loadChildren: "./component1/lazy1.module#Lazy1Module"
  },
  {
    path: "component2", loadChildren: "./component2/lazy2.module#Lazy2Module"
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
