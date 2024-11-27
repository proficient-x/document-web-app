import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-authoring-authoring-entry',
  template: `<div class="m-4"><router-outlet></router-outlet></div>`,
})
export class RemoteEntryComponent {}
