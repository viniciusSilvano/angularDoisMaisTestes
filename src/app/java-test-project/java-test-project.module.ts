import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaTestProjectRoutingModule } from './java-test-project-routing.module';
import { MenusModule } from 'src/app/menu/menus.module';
import { ElasticSearchTestModule } from './elastic-search-test/elastic-search-test.module';
import { JavaTestProjectHomeComponent } from './java-test-project-home/java-test-project-home.component';
import { WebSocketTestModule } from './web-socket-test/web-socket-test.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [JavaTestProjectHomeComponent],
  imports: [
    CommonModule,
    JavaTestProjectRoutingModule,
    ElasticSearchTestModule,
    WebSocketTestModule,
    MenusModule,
    HttpClientModule
  ],
})
export class JavaTestProjectModule { }
