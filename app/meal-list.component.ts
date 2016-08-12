import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { AddMealComponent } from './add-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  directives: [MealComponent, AddMealComponent, EditMealComponent],
  template: `
    <label>Filter by calorie content</label>
    <select (change)="onCalorieChange($event.target.value)">
      <option value="all" selected="selected">Show All Meal Items</option>
      <option value="low">Show Low Calorie Items</option>
      <option value="high">Show High Calorie Items</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calorie:calorieFilter" [meal] = "currentMeal" (click)="editMeal(currentMeal)"> </meal-display>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <add-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2], $event[3])"></add-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onSelectedMeal: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public calorieFilter: "all";
  constructor() {
    this.onSelectedMeal = new EventEmitter();
  }

  createMeal(name: string, description: string, calories: number, date: Date) {
    this.mealList.push(
      new Meal(name, description, calories, date)
    );
  }

  editMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onSelectedMeal.emit(clickedMeal);
  }

  onCalorieChange(filterOption) {
    this.calorieFilter = filterOption;
  }
}
