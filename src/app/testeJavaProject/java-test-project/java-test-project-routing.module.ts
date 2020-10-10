import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElasticSearchTestComponent } from './elastic-search-test/elastic-search-test.component';
import { JavaTestProjectComponent } from './java-test-project/java-test-project.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'java-test-project',
    pathMatch: 'full' 
  },
  {
    path: 'java-test-project',
    component: JavaTestProjectComponent
  },
  {
    path: 'java-test-project/elastic-search-test',
    component: ElasticSearchTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaTestProjectRoutingModule { }
