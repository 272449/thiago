import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ex1', component: Ex1 },
  { path: 'ex2', component: Ex2 },
  { path: 'ex3', component: Ex3 },
  { path: 'ex4', component: Ex4 },
  { path: 'ex5', component: Ex5 },
  { path: 'ex6', component: Ex6 },
  { path: 'ex7', component: Ex7 },
 { path: 'ex8', component: Ex8 },
  { path: 'ex9', component: Ex9 },
   { path: 'ex10', component: Ex10 },
    { path: 'ex11', component: Ex11},
     { path: 'ex12', component: Ex12 },
     { path: 'ex13', component: Ex13 },
     { path: 'ex14', component: Ex14 },
     { path: 'ex15', component: Ex15 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista2RoutingModule {}
