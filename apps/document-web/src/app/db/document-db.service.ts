import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentDbService implements InMemoryDbService {
  documents = [
    {
      documentId: 1,
      documentTitle: 'Document 1',
      documentOwner: 'Amit N',
      documentType: 'Resume',
      creationDate: '22/01/24',
    },
    {
      documentId: 2,
      documentTitle: 'Document 2',
      documentOwner: 'Ashutosh S',
      documentType: 'Letter',
      creationDate: '03/12/22',
    },
  ];

  constructor() {}

  createDb() {
    return { documents: this.documents };
  }

  // CRUD methods

  // GET all items
  getAllDocuments(reqInfo: any): Observable<any> {
    const documents = this.documents;
    return reqInfo.utils.createResponse$(() => ({
      body: documents,
      status: 200,
    }));
  }

  // GET item by id
  getDocumentById(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const document = this.documents.find((i: any) => i.id === id);
    return reqInfo.utils.createResponse$(() => ({
      body: document,
      status: document ? 200 : 404,
    }));
  }

  // POST new document
  addNewDocument(reqInfo: any): Observable<any> {
    const newDocument = reqInfo.utils.getJsonBody(reqInfo.req);
    newDocument.id = this.documents.length + 1; // Generate a new id
    this.documents.push(newDocument);
    return reqInfo.utils.createResponse$(() => ({
      body: newDocument,
      status: 201,
    }));
  }

  // PUT updated document
  updateDocument(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const updatedDocument = reqInfo.utils.getJsonBody(reqInfo.req);
    const index = this.documents.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      this.documents[index] = { ...this.documents[index], ...updatedDocument };
      return reqInfo.utils.createResponse$(() => ({
        body: this.documents[index],
        status: 200,
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Document not found' },
        status: 404,
      }));
    }
  }

  // DELETE document
  deleteDocument(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const index = this.documents.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      const deletedDocument = this.documents.splice(index, 1)[0];
      return reqInfo.utils.createResponse$(() => ({
        body: deletedDocument,
        status: 200,
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Document not found' },
        status: 404,
      }));
    }
  }
}
