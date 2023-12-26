import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CytoscapeTestRoutingModule } from './cytoscape-test-routing.module';
import { CytoscapeTestHomeComponent } from './cytoscape-test-home/cytoscape-test-home.component';
//import { CytoscapeModule } from '../../../../node_modules/ngx-cytoscape/src/ngx-cytoscape';

@NgModule({
  declarations: [CytoscapeTestHomeComponent],
  imports: [
    CommonModule,
    CytoscapeTestRoutingModule,
    //CytoscapeModule
  ]
})
export class CytoscapeTestModule { }
