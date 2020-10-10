import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElasticSearchTestRoutingModule } from './elastic-search-test-routing.module';
import { MenusModule } from 'src/app/menu/menus.module';
import { ElasticSearchTestHomeComponent } from './elastic-search-test-home/elastic-search-test-home.component';
import { ElasticSearchTestRegisterComponent } from './elastic-search-test-register/elastic-search-test-register.component';


@NgModule({
  declarations: [ElasticSearchTestHomeComponent, ElasticSearchTestRegisterComponent],
  imports: [
    CommonModule,
    ElasticSearchTestRoutingModule,
    MenusModule
  ]
})
export class ElasticSearchTestModule { }
