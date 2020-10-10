import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-elastic-search-test',
  templateUrl: './elastic-search-test.component.html',
  styleUrls: ['./elastic-search-test.component.css']
})
export class ElasticSearchTestComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
   
  }

}
