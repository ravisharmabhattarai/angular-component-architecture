import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../common-data';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  originalName: string;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item) {
    if (value) { this.originalName = value.name; }
    this.selectedItem = Object.assign({}, value);
  }
}
