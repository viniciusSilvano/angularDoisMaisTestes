import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SseTestComponent } from './sse-test.component';
import { SseTestParallelProcessingComponent } from './sse-test-parallel-processing/sse-test-parallel-processing.component';

const routes: Routes = [
  { path: '', component: SseTestComponent },
  {
    path: 'home-page/java-test-project/sse-test-parallel-processing',
    component: SseTestParallelProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SseTestRoutingModule { }
