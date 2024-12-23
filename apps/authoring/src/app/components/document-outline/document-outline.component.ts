import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRIMENG_MODULES } from './primeng-module';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-authoring-document-outline',
  standalone: true,
  imports: [CommonModule, PRIMENG_MODULES],
  templateUrl: './document-outline.component.html',
  styleUrl: './document-outline.component.scss',
})
export class DocumentOutlineComponent {
  nodes!: TreeNode[];

  @Input() set documentDetails(value: any) {
    if (value) this._transformData(value.sections);
  }

  _transformData(sections: any) {
    this.nodes = sections.map((section: any) => {
      return {
        key: section.docId,
        label: section.documentTitle,
        type: 'hyperlink',
        children: this._transformData(section.sections),
      };
    });
    return this.nodes;
  }
}
