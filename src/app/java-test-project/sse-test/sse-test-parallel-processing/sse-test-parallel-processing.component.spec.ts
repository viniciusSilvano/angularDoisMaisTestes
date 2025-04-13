import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SseTestParallelProcessingComponent } from './sse-test-parallel-processing.component';

describe('SseTestParallelProcessingComponent', () => {
  let component: SseTestParallelProcessingComponent;
  let fixture: ComponentFixture<SseTestParallelProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SseTestParallelProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SseTestParallelProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
