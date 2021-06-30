import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableLabelComponent } from './resizable-label.component';

describe('ResizableLabelComponent', () => {
  let component: ResizableLabelComponent;
  let fixture: ComponentFixture<ResizableLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
