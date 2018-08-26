import {Recipe} from "./recipes.model";
import { EventEmitter, Injectable } from "../../../node_modules/@angular/core";
import { Ingridient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shoping-list.service";

@Injectable()

export class RecipeService{
recipeSelected= new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe(
        "A Test Recipe",
        "Test disc",
        "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg",
        [
            new Ingridient("Meat",1),
            new Ingridient("Meso",2)
        ]
    ),
        new Recipe("A Test Recipe2",
        "Test disc",
        "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg",
        [
            new Ingridient("Meat2",1),
            new Ingridient("Meso2",2)
        ])
    
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingridient[]){
        this.slService.addIngredients(ingredients);
      }
    }