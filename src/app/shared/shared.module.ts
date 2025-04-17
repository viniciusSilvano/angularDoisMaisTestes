import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaEscuraLoadingComponent } from './components/tela-escura-loading/tela-escura-loading.component';
import { NotificationButtonComponent } from './components/notification-button/notification-button.component';



@NgModule({
  declarations: [TelaEscuraLoadingComponent, NotificationButtonComponent],
  imports: [
    CommonModule
  ],exports:[TelaEscuraLoadingComponent,NotificationButtonComponent]
})
export class SharedModule { }
