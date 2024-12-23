import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PRIMENG_MODULES } from './primeng-module';

import { DocumentListService } from './services/document-list.service';

@Component({
  selector: 'app-doc-document-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ...PRIMENG_MODULES],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
  providers: [DocumentListService],
})
export class DocumentListComponent implements OnInit {
  columns!: any;
  documents!: any;

  loading = true;

  constructor(private _documentListService: DocumentListService) {}

  ngOnInit() {
    this._getDocuments();
  }

  private _getDocuments(): void {
    this.columns = [
      { field: 'docId', header: 'Id', width: '11%' },
      { field: 'documentTitle', header: 'Title', width: '33%' },
      { field: 'documentOwner', header: 'Owner', width: '22%' },
      { field: 'documentType', header: 'Type', width: '22%' },
      { field: 'creationDate', header: 'Creation Date', width: '12%' },
    ];

    this._documentListService
      .getDocuments()
      .subscribe(
        (documents: any) => (
          (this.loading = false), (this.documents = documents)
        )
      );
  }
}
