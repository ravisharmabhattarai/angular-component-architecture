import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { UUID } from 'angular2-uuid';

const MOCK_WIDGETS =  [
    {
      "id": 1,
      "name": "Red Widget",
      "price": 100,
      "description": "This is a red widget"
    },
    {
      "id": 2,
      "name": "Orange Widget",
      "price": 200,
      "description": "This is an orange widget"
    },
    {
      "id": 3,
      "name": "Yellow Widget",
      "price": 300,
      "description": "This is a yellow widget"
    },
    {
      "id": 4,
      "name": "Green Widget",
      "price": 400,
      "description": "This is a green widget"
    },
    {
      "id": 5,
      "name": "Blue Widget",
      "price": 500,
      "description": "This is a blue widget"
    },
    {
      "id": 6,
      "name": "Indigo Widget",
      "price": 600,
      "description": "This is a indigo widget"
    },
    {
      "id": 7,
      "name": "Violet Widget",
      "price": 700,
      "description": "This is a violet widget"
    }
  ];

@Injectable()
export class WidgetsService {
  widgets = [...MOCK_WIDGETS] as Widget[];

  constructor(private http: HttpClient) {
  }

  all() {
    return of(this.widgets)
  }

  create(widget: Widget) {
    const payload = {...widget, id: UUID.UUID()};
    this.widgets = [...this.widgets, payload];
    return of(payload);
  }

  update(widget: Widget) {
    this.widgets = this.widgets.map(wdgt => {
      if(widget.id === wdgt.id) {
        return Object.assign({}, widget);
      } else {
        return wdgt;
      }
    })
    
    return of(widget);
  }

  delete(widget: Widget) {
    this.widgets = this.widgets.filter(wdgt => widget.id !== wdgt.id)
    
    return of(widget);
  }
}
