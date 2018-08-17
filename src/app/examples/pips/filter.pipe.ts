import { Todo } from './../services/model/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(todolist: Todo[], args?: any): any {
    if (args === 'DONE') {
      return todolist.filter(val => val.completed === true);
    } else if (args === 'ACTIVE') {
      return todolist.filter(val => val.completed === false);
    } else {
      return todolist;
    }
  }
}
