import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  this.route.params
    .subscribe(
      (params: ActivatedRoute) => {
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipeMethod(this.recipeId)
        console.log(this.recipe, 'recipe')
      }
    )
  }

  onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(
      ['edit'], { relativeTo: this.route }
      // ['../', this.recipeId, 'edit'], { relativeTo: this.route }
    )
  }
}
