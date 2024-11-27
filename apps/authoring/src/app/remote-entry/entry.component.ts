import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentOutlineComponent } from '../components/document-outline/document-outline.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DocumentOutlineComponent],
  selector: 'app-authoring-authoring-entry',
  template: `<div class="row m-4">
    <div class="col-md-3">
      <app-authoring-document-outline></app-authoring-document-outline>
    </div>
    <div class="col-md-9"><router-outlet></router-outlet></div>
  </div>`,
})
export class RemoteEntryComponent {}
