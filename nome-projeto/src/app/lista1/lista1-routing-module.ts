import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ex1', component: ex1 },
  { path: 'ex2', component: ex2 },
  { path: 'ex3', component: ex3 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista1RoutingModule {}
