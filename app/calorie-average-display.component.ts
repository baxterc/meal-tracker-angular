import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'calorie-average-display',
  inputs: ['dailyMeals', 'calorieCount'],
  template: `
  <div *ngIf="!dailyMeals || !calorieCount"> <p>No calorie information has been entered.</p> </div>

  <div *ngIf="dailyMeals && calorieCount">
  <p><b>Total calories: {{calorieCount}}</b></p>
  <p><b>Average calories for your meal items: {{calorieCount / dailyMeals}}.</b></p>
  </div>

  `
})

export class CalorieAverageComponent {

}
