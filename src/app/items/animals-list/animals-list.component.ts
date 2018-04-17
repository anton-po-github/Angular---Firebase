import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})

export class AnimalsListComponent implements OnInit {

  /// unwrapped arrays from firebase
  animals: any;
  filteredAnimals: any;
  /// filter-able properties
  family:     string;
  weight:     number;
  endangered: boolean;
  /// Active filter rules
  filters = {};
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/animals')
      .subscribe(animals => {
      //  console.log(animals)
        this.animals = animals;
        this.applyFilters()
      })
  }
  private applyFilters() {
    this.filteredAnimals = _.filter(this.animals, _.conforms(this.filters) );

    console.log(this.filteredAnimals);
  }
  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    console.log(this.filters[property]);
    this.filters[property] = val => val === rule;
    this.applyFilters()
  }
  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: number) {
        console.log(this.filters[property]);
    this.filters[property] = val => val > rule;
    this.applyFilters()
  }
  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
        console.log(this.filters[property]);
    if (!rule) {
      this.removeFilter(property);
    } else {
      this.filters[property] = val => val;
      this.applyFilters()
    }
  }
  /// removes filter
  removeFilter(property: string) {
    console.log(this.filters[property]);
    delete this.filters[property];
    this[property] = null;
    this.applyFilters()
  }

  createData() {
    const data = {
      name: 'Crane',
      family: 'bird',
      weight: 10,
      endangered: false,
      // composite keys
      endangered_family: 'false_bird',
      endangered_weight: 'false_10',
      family_weight: 'bird_10',
      endangered_family_weight: 'false_bird_10'
    };
    this.db.list('/animals').push(data)
  }
  getData() {
    this.db.list('/animals', {
      query: {
        orderByChild: 'endangered_family_weight',
        equalTo: 'bird_10_false'
      }
    })
  }
}
