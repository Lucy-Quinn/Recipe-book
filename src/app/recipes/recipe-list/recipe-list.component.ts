import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  createNewRecipe(name, desc, image) {
    return new Recipe(name, desc, image)
  }
  recipes: Recipe[] = [
    new Recipe(
      'Jacket Potato with Tuna',
      'Class English dish',
      'https://images.immediate.co.uk/production/volatile/sites/2/2017/02/Potato-5.jpg?resize=960,872'
    ),
    new Recipe(
      'Fajitas',
      'Favorite Friday evening dish',
      'https://joyfoodsunshine.com/wp-content/uploads/2022/03/chicken-fajitas-recipe-square.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
