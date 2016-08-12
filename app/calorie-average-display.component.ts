import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'calorie-average-display',
  inputs: ['dailyMeals', 'dailyCalories'],
  template: `
  <div *ngIf="!dailyMeals || !dailyCalories"> <p>No calorie information has been entered.</p> </div>

  <div *ngIf="dailyMeals && dailyCalories">
  <p>Total calories: {{dailyCalories}}</p>
  <p>Average calories for your meal items: {{dailyCalories / dailyMeals}}.</p>
  </div>

  `
})

export class CalorieAverageComponent {

}
