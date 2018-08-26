import { Component, OnInit } from '@angular/core';
import {Ingridient} from "../shared/ingridient.model";
import { ShoppingListService } from './shoping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[];
  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingridients=this.slService.getIngridients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingridient[])=>{
          this.ingridients = ingredients;
        }
      )
  }

}
