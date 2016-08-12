import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="form-group">
    <h3>Edit Meal Item Details</h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg form-control"/>
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg form-control"/>
    <input [(ngModel)]="meal.calories" type="number" class="col-sm-8 input-lg form-control"/>
    <input [(ngModel)]="meal.date" type="date" class="col-sm-8 input-lg form-control"/>
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
