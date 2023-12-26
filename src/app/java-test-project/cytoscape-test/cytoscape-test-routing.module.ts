import { CytoscapeTestHomeComponent } from './cytoscape-test-home/cytoscape-test-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CytoscapeTestHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CytoscapeTestRoutingModule {

}
