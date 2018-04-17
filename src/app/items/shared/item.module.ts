import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemService } from './item.service';
import { AnimalsListComponent } from '../animals-list/animals-list.component';

import { HttpModule } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { UploadService } from './upload.service';


@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    AnimalsListComponent
  ],
  providers: [
    ItemService,
    AuthService,
    UploadService
  ]
})
export class ItemModule { }
