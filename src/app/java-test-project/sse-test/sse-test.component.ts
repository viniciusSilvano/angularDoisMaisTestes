import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';
import { interval, Subscription } from 'rxjs';
import { SseTestService } from 'src/app/shared/services/sse-test/sse-test.service';

@Component({
  selector: 'app-sse-test',
  templateUrl: './sse-test.component.html',
  styleUrls: ['./sse-test.component.css']
})
export class SseTestComponent implements OnInit {

  constructor(private sseTestService: SseTestService) { }

  items: MenuItem[] = [];
  progressAsInt: number = 0;
  intervalSubscription : Subscription;

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
        label: 'Sse Parallel Processing test',
        icon: 'pi pi-file',
        routerLink: 'home-page/java-test-project/sse-test-parallel-processing'
      }
     ]
     this.openSseConnection();
     this.validateWebSocket();
  }

  openSseConnection(){
    this.sseTestService.startListening(
      (event) => {
        if(event?.data){
          console.log('mensagem recebida sse: ', event.data);
          this.progressAsInt = event.data;
        }
      }
    );
  }

  private validateWebSocket(){
    if(!this.intervalSubscription){
      this.intervalSubscription = interval(5000).subscribe(() => {
        console.log("iniciando checagem Sse!!")
        this.openSseConnection();
      });
    }
  }

}
