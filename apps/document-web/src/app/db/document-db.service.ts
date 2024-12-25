import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentDbService implements InMemoryDbService {
  private readonly _documents = [
    {
      id: 1,
      docId: 1,
      sectionId: '0',
      documentTitle: 'My Resume for Angular developer position',
      documentOwner: 'Amit N',
      documentType: 'Resume',
      creationDate: '22/01/24',
      description: 'Section Root',
      sections: [
        {
          docId: 1,
          sectionId: '1',
          parentSectionId: 0,
          documentTitle: 'Overview',
          documentOwner: 'Amit N',
          documentType: 'Resume',
          creationDate: '22/01/24',
          description: 'Section 1',
          sections: [
            {
              docId: 1,
              sectionId: '1.1',
              parentSectionId: 1,
              documentTitle: 'INTRODUCTION',
              documentOwner: 'Amit N',
              documentType: 'Resume',
              creationDate: '22/01/24',
              description:
                'Section 1.1 The objective of this document is to get a job somewhere',
              sections: [],
            },
          ],
        },
        {
          docId: 1,
          sectionId: '2',
          parentSectionId: 0,
          documentTitle: 'Objective',
          documentOwner: 'Amit N',
          documentType: 'CV',
          creationDate: '22/01/24',
          description: 'Section 2',
          sections: [
            {
              docId: 1,
              sectionId: '2.1',
              parentSectionId: 1,
              documentTitle: 'Random Introduction',
              documentOwner: 'Amit N',
              documentType: 'Resume',
              creationDate: '22/01/24',
              description:
                'Section 2.1 The objective of this document is to get a job somewhere',
              sections: [],
            },
            {
              docId: 1,
              sectionId: '2.2',
              parentSectionId: 1,
              documentTitle: 'Official INTRODUCTION',
              documentOwner: 'Amit N',
              documentType: 'Resume',
              creationDate: '22/01/24',
              description:
                'Section 2.2 The objective of this document is to get a job somewhere',
              sections: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      docId: 2,
      sectionId: '0',
      documentTitle: 'HR policy of hiring people.',
      documentOwner: 'Srini P',
      documentType: 'Proc',
      creationDate: '2/12/24',
      description: '',
      sections: [
        {
          id: 2,
          docId: 2,
          sectionId: '1.1',
          parentSectionId: 1,
          documentTitle: 'Introduction',
          documentOwner: 'Srini P',
          documentType: 'Proc',
          creationDate: '2/12/24',
          description: '',
          sections: [],
        },
      ],
    },
  ];

  constructor() {
    //
  }

  createDb() {
    return { documents: this._documents };
  }

  // CRUD methods

  // GET all items
  getAllDocuments(reqInfo: any): Observable<any> {
    const documents = this._documents;
    return reqInfo.utils.createResponse$(() => ({
      body: documents,
      status: 200,
    }));
  }

  // GET item by id
  getDocumentById(reqInfo: any): Observable<any> {
    const id = parseInt(reqInfo.id, 10);

    const document = this._documents.find((i: any) => i.id === id);
    return reqInfo.utils.createResponse$(() => ({
      body: document,
      status: document ? 200 : 404,
    }));
  }

  // POST new document
  addNewDocument(reqInfo: any): Observable<any> {
    const newDocument = reqInfo.utils.getJsonBody(reqInfo.req);
    newDocument.id = this._documents.length + 1; // Generate a new id
    this._documents.push(newDocument);
    return reqInfo.utils.createResponse$(() => ({
      body: newDocument,
      status: 201,
    }));
  }

  // PUT updated document
  updateDocument(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const updatedDocument = reqInfo.utils.getJsonBody(reqInfo.req);
    const index = this._documents.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      this._documents[index] = {
        ...this._documents[index],
        ...updatedDocument,
      };
      return reqInfo.utils.createResponse$(() => ({
        body: this._documents[index],
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
    const index = this._documents.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      const deletedDocument = this._documents.splice(index, 1)[0];
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
