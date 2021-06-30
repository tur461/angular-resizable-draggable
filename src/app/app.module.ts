import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResizableInputComponent } from './resizable-input/resizable-input.component';
import { ResizableLabelComponent } from './resizable-label/resizable-label.component';
import { ResizableButtonComponent } from './resizable-button/resizable-button.component';
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizableInputComponent,
    ResizableLabelComponent,
    ResizableButtonComponent,
    ResizableDraggableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
