import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../../recipe.service";
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeIndex: number;

  @Input() recipeItem: {
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  }

  ngOnInit(): void {
    console.log(this.recipeItem)
  }

}
