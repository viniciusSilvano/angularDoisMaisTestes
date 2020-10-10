import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input('items') items?: MenuItem[];
  @Input('titulo') titulo?: string;

  constructor() { }

  ngOnInit(): void { }

}
