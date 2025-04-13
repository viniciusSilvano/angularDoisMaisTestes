import { ButtonModule, ProgressBarModule } from 'primeng';
import { WebSocketTestComponent } from './web-socket-test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusModule } from 'src/app/menu/menus.module';
import { WebSocketParallelProcessingTestComponent } from './web-socket-parallel-processing-test/web-socket-parallel-processing-test.component';
import { WebSocketTestRoutingModule } from './web-socket-test.routing.module';



@NgModule({
  declarations: [WebSocketTestComponent, WebSocketParallelProcessingTestComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    MenusModule,
    WebSocketTestRoutingModule
  ]
})
export class WebSocketTestModule { }
