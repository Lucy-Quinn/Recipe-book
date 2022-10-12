import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: {
    name: string,
    description: string,
    imagePath: string
  }

  @Output() clickedItem = new EventEmitter<void>()

  handleOnClick(){
    this.clickedItem.emit()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
