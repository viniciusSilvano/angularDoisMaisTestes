import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaTestProjectRoutingModule } from './java-test-project-routing.module';
import { MenusModule } from 'src/app/menu/menus.module';
import { ElasticSearchTestModule } from './elastic-search-test/elastic-search-test.module';
import { JavaTestProjectHomeComponent } from './java-test-project-home/java-test-project-home.component';
import { WebSocketTestModule } from './web-socket-test/web-socket-test.module';
import { HttpClientModule } from '@angular/common/http';
import { CytoscapeTestModule } from './cytoscape-test/cytoscape-test.module';
import { ZipTestModule } from './zip-test/zip-test.module';
import { SharedModule } from 'primeng';
@NgModule({
  declarations: [JavaTestProjectHomeComponent],
  imports: [
    CommonModule,
    JavaTestProjectRoutingModule,
    ElasticSearchTestModule,
    WebSocketTestModule,
    MenusModule,
    HttpClientModule,
    CytoscapeTestModule,
    ZipTestModule
  ],
})
export class JavaTestProjectModule { }
