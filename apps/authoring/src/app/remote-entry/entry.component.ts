import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RichTextEditorComponent } from '@dwa/core';

import { DocumentOutlineComponent } from '../components/document-outline/document-outline.component';

import { DocumentDetailsService } from '../services/document-details.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DocumentOutlineComponent,
    RichTextEditorComponent,
  ],
  selector: 'app-authoring-authoring-entry',
  template: `<div class="row">
    <div class="col-md-3">
      <app-authoring-document-outline
        [documentDetails]="documentDetails"
      ></app-authoring-document-outline>
    </div>
    <div class="col-md-9">
      @if (documentDetails) {
      <ng-container
        *ngTemplateOutlet="
          sectionTemplate;
          context: { $implicit: documentDetails }
        "
      >
      </ng-container>
      }

      <ng-template #sectionTemplate let-section>
        <div
          [style]="{
            'margin-left': getLeftMargin(section.level),
          }"
        >
          <lib-rich-text-editor [data]="section"></lib-rich-text-editor>
        </div>

        @for (subSection of section.sections; track $index) {
        <ng-container
          *ngTemplateOutlet="
            sectionTemplate;
            context: { $implicit: subSection }
          "
        >
        </ng-container>
        }
      </ng-template>
    </div>
  </div>`,
  styles: ['::ng-deep .p-tree-wrapper ul {padding-left:0rem;}'],
  providers: [DocumentDetailsService],
})
export class RemoteEntryComponent implements OnInit {
  documentDetails: any;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('docId') private readonly _docId?: string;

  constructor(private _documentDetailsService: DocumentDetailsService) {}

  ngOnInit(): void {
    if (this._docId) this._getDocumentDetails(+this._docId);
  }

  private _getDocumentDetails(docId: number) {
    this._documentDetailsService
      .getDocumentDetailsByDocId(docId)
      .subscribe((documentDetails: any) => {
        console.log(documentDetails);
        this.documentDetails = documentDetails;
      });
  }

  public getLeftMargin(level: number): string {
    return level > 1 ? level * 10 + 'px' : '0px';
  }
}
