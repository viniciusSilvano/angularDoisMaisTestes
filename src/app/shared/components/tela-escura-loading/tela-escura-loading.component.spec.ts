import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscuraLoadingComponent } from './tela-escura-loading.component';

describe('TelaEscuraLoadingComponent', () => {
  let component: TelaEscuraLoadingComponent;
  let fixture: ComponentFixture<TelaEscuraLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEscuraLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEscuraLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
