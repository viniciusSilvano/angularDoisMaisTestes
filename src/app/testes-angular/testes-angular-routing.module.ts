import { TestePTableComponent } from './teste-p-table/teste-p-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page/testes-angular',
    pathMatch: 'full' 
  },
  {
    path: 'home-page/testes-angular',
    component: TestePTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesAngularRoutingModule { }
