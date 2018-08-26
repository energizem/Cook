import { Ingridient } from "../shared/ingridient.model";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class ShoppingListService{

    ingredientsChanged= new EventEmitter<Ingridient[]>();

    private ingridients: Ingridient[]=[
        new Ingridient("Apples",5),
        new Ingridient("Tomatoes",10),
      ];
      
      getIngridients(){
          return this.ingridients.slice();
      }

      addIngredient(ingridient: Ingridient){
          this.ingridients.push(ingridient);
          this.ingredientsChanged.emit(this.ingridients.slice());
      }

      addIngredients(ingredients: Ingridient[]){
          this.ingridients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingridients.slice());
      }

}