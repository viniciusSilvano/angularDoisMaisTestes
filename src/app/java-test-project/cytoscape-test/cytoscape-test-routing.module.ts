import { CytoscapeTestHomeComponent } from './cytoscape-test-home/cytoscape-test-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home-page/java-test-project/cytoscape-test-home',
    component: CytoscapeTestHomeComponent
  },
  {
    path: '',
    redirectTo: 'home-page/java-test-project/cytoscape-test-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CytoscapeTestRoutingModule {

}
