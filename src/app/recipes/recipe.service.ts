import {Recipe} from "../shared/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService {
   recipes: Recipe[] = [
    new Recipe(
      'Jacket Potato with Tuna',
      'Class English dish',
      'https://images.immediate.co.uk/production/volatile/sites/2/2017/02/Potato-5.jpg?resize=960,872',
      [
        new Ingredient('Potato', 1),
        new Ingredient('Tin of tuna', 1),
        new Ingredient('Spoonful of mayo', 1),
        new Ingredient('Bunch of salad leaves', 2),
      ]
    ),
    new Recipe(
      'Fajitas',
      'Favorite Friday evening dish',
      'https://joyfoodsunshine.com/wp-content/uploads/2022/03/chicken-fajitas-recipe-square.jpg',
      [
        new Ingredient('Chicken breast', 2),
        new Ingredient('Can of chopped tomatoes', 1),
        new Ingredient('Spoonfuls of paprika', 2),
        new Ingredient('Tortilla wraps', 2),
        new Ingredient('Avocado', 1),
      ]
    )
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipesMethod(){
    // By slicing you are returning a copy of the array not a direct reference to the array in this service
    return this.recipes.slice()
  }

}
