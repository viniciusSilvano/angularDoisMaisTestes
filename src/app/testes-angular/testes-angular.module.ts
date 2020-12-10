import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestesAngularRoutingModule } from './testes-angular-routing.module';
import { TestePTableComponent } from './teste-p-table/teste-p-table.component';
import { CheckboxModule, ButtonModule } from 'primeng';

@NgModule({
  declarations: [TestePTableComponent],
  imports: [
    CommonModule,
    TableModule,
    TestesAngularRoutingModule,
    CheckboxModule,
    ButtonModule,
    FormsModule
  ]
})
export class TestesAngularModule {

}
