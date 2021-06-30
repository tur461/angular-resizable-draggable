import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableButtonComponent } from './resizable-button.component';

describe('ResizableButtonComponent', () => {
  let component: ResizableButtonComponent;
  let fixture: ComponentFixture<ResizableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResizableButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});