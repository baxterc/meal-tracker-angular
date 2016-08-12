import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-header',
  inputs: ['mealDate'],
  template: `
  <h4 *ngIf="!mealDate">Viewing all meals from all days...</h4>
  <h4 *ngIf="mealDate">Meals for {{mealDate}}</h4>
  `

})

export class MealHeaderComponent {
  public mealDate: string;
}
