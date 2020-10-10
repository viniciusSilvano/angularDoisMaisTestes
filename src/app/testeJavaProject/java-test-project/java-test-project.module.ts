import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaTestProjectRoutingModule } from './java-test-project-routing.module';
import { ElasticSearchTestComponent } from './elastic-search-test/elastic-search-test.component';
import { JavaTestProjectComponent } from './java-test-project/java-test-project.component';
import { MenusModule } from 'src/app/menu/menus.module';


@NgModule({
  declarations: [ElasticSearchTestComponent, JavaTestProjectComponent],
  imports: [
    CommonModule,
    JavaTestProjectRoutingModule,
    MenusModule
  ],
})
export class JavaTestProjectModule { }
