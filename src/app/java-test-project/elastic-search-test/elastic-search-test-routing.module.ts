import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElasticSearchTestHomeComponent } from './elastic-search-test-home/elastic-search-test-home.component';


const routes: Routes = [
  {
    path: 'home-page/java-test-project/elastic-search-test',
    component: ElasticSearchTestHomeComponent
  },
  {
    path: '',
    redirectTo: 'home-page/java-test-project/elastic-search-test',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElasticSearchTestRoutingModule { }
