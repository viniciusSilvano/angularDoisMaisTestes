import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketParallelProcessingTestComponent } from './web-socket-parallel-processing-test.component';

describe('WebSocketParallelProcessingTestComponent', () => {
  let component: WebSocketParallelProcessingTestComponent;
  let fixture: ComponentFixture<WebSocketParallelProcessingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketParallelProcessingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketParallelProcessingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
