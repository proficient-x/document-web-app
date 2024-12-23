import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentDetailsService {
  private readonly _documentUrl = 'api/documents';

  constructor(private _http: HttpClient) {}

  getDocumentDetailsByDocId(docId: number): Observable<any[]> {
    return this._http.get<any[]>(this._documentUrl + '/' + docId);
  }
}
