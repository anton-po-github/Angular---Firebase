import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

  updateTimeStamp() {
    const date = new Date().getTime();
    console.log(this.item.$key);
    this.itemSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.item.$key)
  }

  getPersonData(key) {
    this.itemSvc.getItem(key)
    .subscribe();
  }
}
