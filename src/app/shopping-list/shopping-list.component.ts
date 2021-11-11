import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 10),
    new Ingrediant('Grapes', 25),
  ];
  constructor() {}

  ngOnInit(): void {}

  onIngrediantAdded(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
  }
}
