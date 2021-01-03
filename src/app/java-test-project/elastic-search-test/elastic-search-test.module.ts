import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElasticSearchTestRoutingModule } from './elastic-search-test-routing.module';
import { MenusModule } from 'src/app/menu/menus.module';
import { ElasticSearchTestHomeComponent } from './elastic-search-test-home/elastic-search-test-home.component';
import { ElasticSearchTestRegisterComponent } from './elastic-search-test-register/elastic-search-test-register.component';
import { ButtonModule, InputTextModule, MessageService, PanelModule } from 'primeng';
import {ToastModule} from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ElasticSearchTestHomeComponent, ElasticSearchTestRegisterComponent],
  providers:[
    MessageService
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    ElasticSearchTestRoutingModule,
    MenusModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    HttpClientModule
  ]
})
export class ElasticSearchTestModule { }
