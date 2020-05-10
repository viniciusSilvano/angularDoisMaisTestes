import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros.component';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    LivrosComponent
  ]
})
export class LivrosModule { }
