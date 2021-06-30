import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableInputComponent } from './resizable-input.component';

describe('ResizableInputComponent', () => {
  let component: ResizableInputComponent;
  let fixture: ComponentFixture<ResizableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
