import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaTestProjectHomeComponent } from './java-test-project-home/java-test-project-home.component';
import { WebSocketTestComponent } from './web-socket-test/web-socket-test.component';


const routes: Routes = [
  {
    path: 'home-page/java-test-project/elastic-search-test',
    loadChildren: () => import('./elastic-search-test/elastic-search-test.module').then(m => m.ElasticSearchTestModule)
  },
  {
    path: 'home-page/java-test-project/cytoscape-test',
    loadChildren: () => import('./cytoscape-test/cytoscape-test.module').then(m => m.CytoscapeTestModule)
  },
  {
    path: 'home-page/java-test-project/zip-test',
    loadChildren: () => import('./zip-test/zip-test.module').then(m => m.ZipTestModule)
  },
  {
    path: '',
    component: JavaTestProjectHomeComponent
  },
  {
    path: 'home-page/java-test-project/web-socket-test',
    loadChildren: () => import('./web-socket-test/web-socket-test.module').then(m => m.WebSocketTestModule) 
  },
  { 
    path: 'home-page/java-test-project/sse_test', 
    loadChildren: () => import('./sse-test/sse-test.module').then(m => m.SseTestModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaTestProjectRoutingModule { }
