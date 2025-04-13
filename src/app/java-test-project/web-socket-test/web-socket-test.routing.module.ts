import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebSocketTestComponent } from './web-socket-test.component';
import { WebSocketParallelProcessingTestComponent } from './web-socket-parallel-processing-test/web-socket-parallel-processing-test.component';

const routes: Routes = [
  { path: '', component: WebSocketTestComponent },
  {
    path: 'home-page/java-test-project/web-socket-test-parallel-processing',
    component: WebSocketParallelProcessingTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebSocketTestRoutingModule { }
