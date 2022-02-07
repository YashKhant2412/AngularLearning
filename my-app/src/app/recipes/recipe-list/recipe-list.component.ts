import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipeItem = new EventEmitter<Recipe>();
  recipes : Recipe[];

  constructor(private recipeService : RecipeService) {
   }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  onRecipeSelected(recipe:Recipe){
    this.selectedRecipeItem.emit(recipe);
  }

  addOne(){
    this.recipeService.recipes.push(this.recipeService.recipes[this.getRandomInt(this.recipes.length)]);
    this.recipes = this.recipeService.getRecipe();
    // this.recipes.push(this.recipes[this.getRandomInt(this.recipes.length)]);
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
