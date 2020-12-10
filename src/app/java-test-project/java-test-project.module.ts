import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaTestProjectRoutingModule } from './java-test-project-routing.module';
import { MenusModule } from 'src/app/menu/menus.module';
import { ElasticSearchTestModule } from './elastic-search-test/elastic-search-test.module';
import { JavaTestProjectHomeComponent } from './java-test-project-home/java-test-project-home.component';
import { WebSocketTestComponent } from './web-socket-test/web-socket-test.component';
@NgModule({
  declarations: [JavaTestProjectHomeComponent, WebSocketTestComponent],
  imports: [
    CommonModule,
    JavaTestProjectRoutingModule,
    MenusModule,
    ElasticSearchTestModule
  ],
})
export class JavaTestProjectModule { }
