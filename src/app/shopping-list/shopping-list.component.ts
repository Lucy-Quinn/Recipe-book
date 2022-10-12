import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Potatoe', 1),
    new Ingredient('Tuna', 1)
  ]

  addedIngredientElement(ingredientDetails){
    this.ingredients.push(ingredientDetails)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
