import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CytoscapeTestRoutingModule } from './cytoscape-test-routing.module';
import { CytoscapeTestHomeComponent } from './cytoscape-test-home/cytoscape-test-home.component';


@NgModule({
  declarations: [CytoscapeTestHomeComponent],
  imports: [
    CommonModule,
    CytoscapeTestRoutingModule
  ]
})
export class CytoscapeTestModule { }
