import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElasticSearchTestRoutingModule } from './elastic-search-test-routing.module';
import { ElasticSearchTestComponent } from './home-page/elastic-search-test.component';
import { MenusModule } from 'src/app/menu/menus.module';


@NgModule({
  declarations: [ElasticSearchTestComponent],
  imports: [
    CommonModule,
    ElasticSearchTestRoutingModule,
    MenusModule
  ]
})
export class ElasticSearchTestModule { }
