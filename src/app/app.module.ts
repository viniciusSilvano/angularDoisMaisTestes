import { WebsocketTesteJavaService } from './shared/services/websocket-teste-java/websocket-teste-java.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosModule } from './livros/livros.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MenusModule } from './menu/menus.module';
import { JavaTestProjectModule } from './java-test-project/java-test-project.module';
import { TestesAngularModule } from './testes-angular/testes-angular.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LivrosModule,
    AppRoutingModule,
    JavaTestProjectModule,
    MenusModule,
    TestesAngularModule,
    HttpClientModule
  ],
  providers: [WebsocketTesteJavaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
