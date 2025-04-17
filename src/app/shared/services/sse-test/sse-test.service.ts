import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SseTestService {

  private eventSource: EventSource | null = null;

  constructor() { }

  startListening(onMessage: (event: any) => void): void {
    if (!this.eventSource || this.eventSource.CLOSED) {
      
      // Create a new EventSource to listen to the backend SSE stream
      this.eventSource = new EventSource('http://localhost:8080/javaTeste/sse_test');

      // Handle the message event when an event is received
      this.eventSource.onmessage = onMessage

      // Handle errors or connection issues
      this.eventSource.onerror = (error) => {
        console.error('Error with SSE connection:', error);
        if (this.eventSource) {
          this.eventSource.close();
        }
      };
    }
  }

  // Stop listening for events
  stopListening(): void {
    if (this.eventSource) {
      this.eventSource.close(); // Close the connection when done
    }
  }
}
