import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { UUID } from 'angular2-uuid';

const MOCK_ITEMS = [
    {
      "id": 1,
      "name": "Red Item",
      "price": "100",
      "description": "This is a red item"
    },
    {
      "id": 2,
      "name": "Orange Item edited",
      "price": 200,
      "description": "This is an orange item"
    },
    {
      "id": 3,
      "name": "Yellow Item",
      "price": 300,
      "description": "This is a yellow item"
    },
    {
      "id": 4,
      "name": "Green Item",
      "price": 400,
      "description": "This is a green item"
    },
    {
      "id": 5,
      "price": 500,
      "name": "Blue Item",
      "description": "This is a blue item"
    },
    {
      "id": 6,
      "name": "Indigo Item",
      "price": 600,
      "description": "This is a indigo item"
    },
    {
      "id": 7,
      "name": "Violet Item",
      "price": 700,
      "description": "This is a violet item"
    }
  ];

@Injectable()
export class ItemsService {
  items = [...MOCK_ITEMS] as Item[];

  constructor(private http: HttpClient) {
  }

  all() {
    return of(this.items);
  }

  create(item: Item) {
    const payload = {...item, id: UUID.UUID()};
    this.items = [...this.items, payload];
    return of(payload);
  }

  update(item: Item) {
    this.items = this.items.map(itm => {
      if(item.id === itm.id) {
        return Object.assign({}, item);
      } else {
        return itm;
      }
    })
    
    return of(item);
  }

  delete(item: Item) {
    this.items = this.items.filter(itm => item.id !== itm.id)
    
    return of(item);
  }
}
