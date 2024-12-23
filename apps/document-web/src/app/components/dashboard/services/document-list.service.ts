import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentListService {
  private _documentUrl = 'api/documents'; // URL to web api

  constructor(private _http: HttpClient) {}

  getDocuments(): Observable<any[]> {
    return this._http.get<any[]>(this._documentUrl);
  }
}
