import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() public selectedRecipeItem = new EventEmitter<Recipe>();
  public recipes : Recipe[];

  constructor(private recipeService : RecipeService) {
   }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  public onRecipeSelected(recipe:Recipe):void{
    this.selectedRecipeItem.emit(recipe);
  }

  public addOne():void{
    this.recipeService.addRecipe();
    this.recipes = this.recipeService.getRecipe();
  }

 

 
}
