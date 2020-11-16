import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home-page',
    pathMatch: 'full' 
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
 {
    path: 'home-page/java-test-project',
    loadChildren: () => import('../app/java-test-project/java-test-project.module').then(m => m.JavaTestProjectModule)
 },
 {
  path: 'home-page/testes-angular',
  loadChildren: () => import('../app/testes-angular/testes-angular.module').then(m => m.TestesAngularModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
