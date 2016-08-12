import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div>
    <h2>Add a new meal item</h2>
    <input placeholder="Name of item" #newName>
    <input placeholder="Details" #newDetails>
    <input placeholder="Calories" type="number" #newCalories>
    <input placeholder="Date eaten" type="date" #newDate>
    <button (click)="addMeal(newName, newDetails, newCalories, newDate)">Add Item</button>
  </div>
  `
})
export class AddMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]> = new EventEmitter();
  constructor(){
    this.onSubmitNewMeal = new EventEmitter()
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement, mealDate: HTMLInputElement) {
    this.onSubmitNewMeal.emit([mealName.value, mealDetails.value, mealCalories.value, mealDate.value])
  }
}
