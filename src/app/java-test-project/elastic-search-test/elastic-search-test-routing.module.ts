import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElasticSearchTestHomeComponent } from './elastic-search-test-home/elastic-search-test-home.component';
import { ElasticSearchTestRegisterComponent } from './elastic-search-test-register/elastic-search-test-register.component';


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
  {
    path: 'home-page/java-test-project/elastic-search-test/cadastrar',
    component: ElasticSearchTestRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElasticSearchTestRoutingModule { }
