import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaEscuraLoadingComponent } from './components/tela-escura-loading/tela-escura-loading.component';



@NgModule({
  declarations: [TelaEscuraLoadingComponent],
  imports: [
    CommonModule
  ],exports:[TelaEscuraLoadingComponent]
})
export class SharedModule { }
