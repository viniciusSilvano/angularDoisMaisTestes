import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-elastic-search-test-home',
  templateUrl: './elastic-search-test-home.component.html',
  styleUrls: ['./elastic-search-test-home.component.css']
})
export class ElasticSearchTestHomeComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
   
  }

}
