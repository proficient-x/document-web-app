import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentOutlineComponent } from '../components/document-outline/document-outline.component';

import { DocumentDetailsService } from '../services/document-details.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DocumentOutlineComponent],
  selector: 'app-authoring-authoring-entry',
  template: `<div class="row">
    <div class="col-md-3">
      <app-authoring-document-outline
        [documentDetails]="documentDetails"
      ></app-authoring-document-outline>
    </div>
    <div class="col-md-9"><router-outlet></router-outlet></div>
  </div>`,
  styles: ['::ng-deep .p-tree-wrapper ul {padding-left:0rem;}'],
  providers: [DocumentDetailsService],
})
export class RemoteEntryComponent implements OnInit {
  documentDetails: any;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('docId') private readonly _docId?: string;

  constructor(private _documentDetailsService: DocumentDetailsService) {}

  ngOnInit() {
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
}
