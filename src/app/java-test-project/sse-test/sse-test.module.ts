import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SseTestRoutingModule } from './sse-test-routing.module';
import { SseTestComponent } from './sse-test.component';
import { MenusModule } from 'src/app/menu/menus.module';
import { ButtonModule, ProgressBarModule } from 'primeng';
import { SseTestParallelProcessingComponent } from './sse-test-parallel-processing/sse-test-parallel-processing.component';
import { NotificationButtonComponent } from 'src/app/shared/components/notification-button/notification-button.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SseTestComponent, SseTestParallelProcessingComponent],
  imports: [
    CommonModule,
    MenusModule,
    ButtonModule,
    SseTestRoutingModule,
    ProgressBarModule,
    SharedModule  
  ]
})
export class SseTestModule { }
