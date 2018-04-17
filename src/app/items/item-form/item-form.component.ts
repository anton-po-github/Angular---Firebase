import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { User } from '../../roles/user';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  item: Item = new Item();

  constructor(private itemSvc: ItemService) { }

  createItem() {
    this.itemSvc.createItem(this.item);
    this.item = new Item();
  }
}
