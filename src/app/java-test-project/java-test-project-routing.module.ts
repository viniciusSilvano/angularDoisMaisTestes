import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaTestProjectComponent } from './java-test-project-home/java-test-project-home.component';


const routes: Routes = [
  {
    path: 'home-page/java-test-project/elastic-search-test',
    loadChildren: () => import('./elastic-search-test/elastic-search-test.module').then(m => m.ElasticSearchTestModule)
   },
  {
    path: '',
    redirectTo: 'home-page/java-test-project',
    pathMatch: 'full' 
  },
  {
    path: 'home-page/java-test-project',
    component: JavaTestProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaTestProjectRoutingModule { }
