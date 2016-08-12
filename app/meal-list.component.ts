import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { AddMealComponent } from './add-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  directives: [MealComponent, AddMealComponent],
  template: `
    <label>Filter by calorie content</label>
    <select (change)="onCalorieChange($event.target.value)">
      <option value="all" selected="selected">Show All Meal Items</option>
      <option value="low">Show Low Calorie Items</option>
      <option value="high">Show High Calorie Items</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calorie:calorieFilter" [meal] = "currentMeal"> </meal-display>
    <add-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2], $event[3])"></add-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public calorieFilter: "all";

  createMeal(name: string, description: string, calories: number, date: Date) {
    this.mealList.push(
      new Meal(name, description, calories, date)
    );
  }

  onCalorieChange(filterOption) {
    this.calorieFilter = filterOption;
  }
}
