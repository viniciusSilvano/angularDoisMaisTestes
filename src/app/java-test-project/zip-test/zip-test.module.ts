import { ButtonModule } from 'primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipTestRoutingModule } from './zip-test-routing.module';
import { ZipTestHomeComponent } from './zip-test-home/zip-test-home.component';
import { MenusModule } from 'src/app/menu/menus.module';


@NgModule({
  declarations: [ZipTestHomeComponent],
  imports: [
    CommonModule,
    ZipTestRoutingModule,
    MenusModule,
    ButtonModule
  ]
})
export class ZipTestModule { }
