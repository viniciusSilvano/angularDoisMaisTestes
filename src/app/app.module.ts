import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosModule } from './livros/livros.module';
import { JavaTestProjectModule } from './testeJavaProject/java-test-project/java-test-project.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MenusModule } from './menu/menus.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    LivrosModule,
    AppRoutingModule,
    JavaTestProjectModule,
    MenusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
