import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <div class="meal">
      <p><b>{{ meal.name }} on {{meal.date}}</b></p>
      <p>"{{meal.details}}"</p>
      <p>Calories: {{ meal.calories }}</p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
