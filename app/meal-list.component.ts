import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { AddMealComponent } from './add-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { MealHeaderComponent} from './meal-header.component';
import { CalorieAverageComponent } from './calorie-average-display.component';
import { CaloriePipe } from './calorie.pipe';
import { DatePipe } from './meals-by-date.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe, DatePipe],
  directives: [MealComponent, AddMealComponent, EditMealComponent, MealHeaderComponent, CalorieAverageComponent],
  template: `
    <label>Filter by calorie content: </label>
    <select (change)="onCalorieChange($event.target.value)">
      <option value="all" selected="selected">Show All Meal Items</option>
      <option value="low">Show Low Calorie Items</option>
      <option value="high">Show High Calorie Items</option>
    </select>

    <label>Filter by meal date: </label>
    <input (change)="onDateChange($event.target.value)" type="date">

    <meal-header [mealDate]="dateFilter"></meal-header>

    <meal-display *ngFor="#currentMeal of mealList | calorie:calorieFilter | mealDate:dateFilter" [meal] = "currentMeal" (click)="editMeal(currentMeal)"> </meal-display>

    <calorie-average-display [dailyMeals]="mealCount" [dailyCalories]="dailyCalorieCount"></calorie-average-display>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <add-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2], $event[3])"></add-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onSelectedMeal: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public calorieFilter: "all";
  public dateFilter: string;
  public mealCount: number = 0;
  public dailyCalorieCount: number = 0;
  constructor() {
    this.onSelectedMeal = new EventEmitter();

  }

  createMeal(name: string, description: string, calories: string, date: string) {
    this.mealList.push(
      new Meal(name, description, calories, date)
    );
    console.log(this.dateFilter);
    if (this.dateFilter === date || !this.dateFilter){
      this.mealCount += 1;
      this.dailyCalorieCount += parseInt(calories);
      console.log(this.mealCount);
      console.log(this.dailyCalorieCount);
      console.log(this.mealList);
    }

  }

  editMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onSelectedMeal.emit(clickedMeal);
  }

  onCalorieChange(filterOption) {
    this.calorieFilter = filterOption;
  }

  onDateChange(filterOption) {
    this.dateFilter = filterOption;
    this.mealCount = 0;
    this.dailyCalorieCount = 0;
    for (var i = 0; i < (this.mealList.length); i++) {
      if (this.mealList[i].date === filterOption) {
        this.mealCount ++
        this.dailyCalorieCount += parseInt(this.mealList[i].calories);
      }
    }
  }
}
