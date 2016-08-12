import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "mealDate",
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(input: Meal[], info) {
    var mealDate = info[0];
    if (mealDate === "all" || !mealDate) {
      return input;
    } else {
      return input.filter(function(meal){
        return meal.date === mealDate;
      })
    }
  }
}
