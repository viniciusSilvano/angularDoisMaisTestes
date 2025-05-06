export abstract class SseService {

  private eventSource: EventSource | null = null;

  constructor() { }

  protected abstract getUrl() : string;

  startListening(onMessage: (event: any) => void): void {
    if (!this.eventSource || this.eventSource.CLOSED) {
      
      if(this.eventSource){
        this.eventSource.close();
      }
      // Create a new EventSource to listen to the backend SSE stream
      this.eventSource = new EventSource(this.getUrl());

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
