import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { AddMealComponent } from './add-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, AddMealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList" [meal] = "currentMeal"> </meal-display>
    <add-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2], $event[3])"></add-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];

  createMeal(name: string, description: string, calories: number, date: Date) {
    this.mealList.push(
      new Meal(name, description, calories, date)
    );
  }
}
