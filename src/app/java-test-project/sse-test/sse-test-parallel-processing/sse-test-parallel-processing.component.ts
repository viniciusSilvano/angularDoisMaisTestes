import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';
import { SseParallelProcessingTestService } from 'src/app/shared/services/sse-test/processes/sse-parallel-processing-test.service';

@Component({
  selector: 'app-sse-test-parallel-processing',
  templateUrl: './sse-test-parallel-processing.component.html',
  styleUrls: ['./sse-test-parallel-processing.component.css']
})
export class SseTestParallelProcessingComponent implements OnInit {

  constructor(private sseParallelProcessingTestService : SseParallelProcessingTestService) { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home Page',
        icon: 'pi pi-home',
        routerLink:"/home-page",
      },
      {
        label: 'Java Test Project',
        icon: 'pi pi-folder',
        routerLink: "/home-page/java-test-project"
      },
      {
        label: 'Sse test',
        icon: 'pi pi-file',
        routerLink: '/home-page/java-test-project/sse_test'
      }
     ]
  }

  beginProcessing(){
    this.sseParallelProcessingTestService.beginProcessing();
  }

}
