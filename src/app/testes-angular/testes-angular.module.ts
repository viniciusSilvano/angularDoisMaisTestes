import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestesAngularRoutingModule } from './testes-angular-routing.module';
import { TestePTableComponent } from './teste-p-table/teste-p-table.component';


@NgModule({
  declarations: [TestePTableComponent],
  imports: [
    CommonModule,
    TestesAngularRoutingModule
  ]
})
export class TestesAngularModule { }
