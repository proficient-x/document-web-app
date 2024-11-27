import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from '../components/editor/editor.component';

@Component({
  standalone: true,
  imports: [CommonModule, EditorComponent],
  selector: 'app-editor-editor-entry',
  template: `<app-editor-editor></app-editor-editor>`,
})
export class RemoteEntryComponent {}
