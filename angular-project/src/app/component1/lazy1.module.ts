import { Component1Component } from './component1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SurnamePipe } from './surname.pipe';

const routes: Routes = [
  {
    path: "", component: Component1Component
  }
]

@NgModule({
  declarations: [Component1Component, SurnamePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Lazy1Module { }
