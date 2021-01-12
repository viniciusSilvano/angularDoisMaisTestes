import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipTestHomeComponent } from './zip-test-home/zip-test-home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page/java-test-project/zip-test',
    pathMatch: 'full'
  },
  {
    path: 'home-page/java-test-project/zip-test',
    component: ZipTestHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipTestRoutingModule { }
