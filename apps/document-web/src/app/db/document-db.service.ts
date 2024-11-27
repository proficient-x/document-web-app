import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentDbService implements InMemoryDbService {
  items = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png',
      },
      balance: 70663,
    },
    {
      id: 1001,
      name: 'Josephine Darakjy',
      country: {
        name: 'Egypt',
        code: 'eg',
      },
      company: 'Chanay, Jeffrey A Esq',
      date: '2019-02-09',
      status: 'proposal',
      verified: true,
      activity: 0,
      representative: {
        name: 'Amy Elsner',
        image: 'amyelsner.png',
      },
      balance: 82429,
    },
  ];

  constructor() {}

  createDb() {
    return { items: this.items };
  }

  // CRUD methods

  // GET all items
  getAllItems(reqInfo: any): Observable<any> {
    const items = this.items;
    return reqInfo.utils.createResponse$(() => ({
      body: items,
      status: 200,
    }));
  }

  // GET item by id
  getItemById(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const item = this.items.find((i: any) => i.id === id);
    return reqInfo.utils.createResponse$(() => ({
      body: item,
      status: item ? 200 : 404,
    }));
  }

  // POST new item
  addNewItem(reqInfo: any): Observable<any> {
    const newItem = reqInfo.utils.getJsonBody(reqInfo.req);
    newItem.id = this.items.length + 1; // Generate a new id
    this.items.push(newItem);
    return reqInfo.utils.createResponse$(() => ({
      body: newItem,
      status: 201,
    }));
  }

  // PUT updated item
  updateItem(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const updatedItem = reqInfo.utils.getJsonBody(reqInfo.req);
    const index = this.items.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return reqInfo.utils.createResponse$(() => ({
        body: this.items[index],
        status: 200,
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Item not found' },
        status: 404,
      }));
    }
  }

  // DELETE item
  deleteItem(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const index = this.items.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      const deletedItem = this.items.splice(index, 1)[0];
      return reqInfo.utils.createResponse$(() => ({
        body: deletedItem,
        status: 200,
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Item not found' },
        status: 404,
      }));
    }
  }
}
