import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], info) {
    var calorieThreshold = info[0];
    if (calorieThreshold === "all" || !calorieThreshold) {
      return input;
    } else if (calorieThreshold === "low"){
      return input.filter(function(meal){
        return meal.calories <= 500;
      });
    } else if (calorieThreshold === "high"){
      return input.filter(function(meal){
        return meal.calories > 500;
      });
    } else {
      return input;
    }
  }
}
