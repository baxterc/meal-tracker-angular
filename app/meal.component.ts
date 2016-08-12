import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <div>
      <label>{{ meal.name }} on {{meal.date}}</label>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
