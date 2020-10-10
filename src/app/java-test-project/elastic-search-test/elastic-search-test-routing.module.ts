import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElasticSearchTestComponent } from './home-page/elastic-search-test.component';


const routes: Routes = [
  {
    path: 'home-page/java-test-project/elastic-search-test',
    component: ElasticSearchTestComponent
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
