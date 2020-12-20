import { ButtonModule, ProgressBarModule } from 'primeng';
import { WebSocketTestComponent } from './web-socket-test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusModule } from 'src/app/menu/menus.module';



@NgModule({
  declarations: [WebSocketTestComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    MenusModule
  ]
})
export class WebSocketTestModule { }
