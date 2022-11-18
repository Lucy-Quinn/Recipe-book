import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../../recipe.service";
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: {
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  }

  constructor(private recipeService: RecipeService) { }

  handleOnClick(){
    this.recipeService.selectedRecipe.emit(this.recipeItem);
  }

  ngOnInit(): void {
  }

}
