import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("Pizza", "This is pizza.","https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg"),
        new Recipe('Gulab Jamun', 'This is simpy sweet.', 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg'),
        new Recipe('Fafda',"This is delecious item","https://cdn.shopify.com/s/files/1/0433/1952/5533/products/FAFDA.jpg?v=1597916222")
      ];

    public getRecipe():Recipe[]{
        return this.recipes.slice();
    }

    public addRecipe():void{
        this.recipes.push(this.recipes[this.getRandomInt()]);
    }
    public getRandomInt():number {
        return Math.floor(Math.random() * this.recipes.length);
      }
    
}