import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Coffee", "Had it with some cream.", "100", "2016-08-12"),
      new Meal("Toast", "Two slices with a little butter.", "200", "2016-08-12"),
      new Meal("Banana", "Overripe.", "100", "2016-08-12"),
    ];
  }
}
