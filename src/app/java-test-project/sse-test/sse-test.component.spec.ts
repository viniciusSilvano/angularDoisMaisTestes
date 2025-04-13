import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SseTestComponent } from './sse-test.component';

describe('SseTestComponent', () => {
  let component: SseTestComponent;
  let fixture: ComponentFixture<SseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SseTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
