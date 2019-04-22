import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../model/task';
import {SubTask} from '../model/subTask';

@Pipe({name: 'customSort'})
export class CustomSort implements PipeTransform {
  transform(value: Task[] | SubTask[], sort: boolean): Task[] | SubTask[]{
    if(sort) {
      return value.sort(this.compare);
    }else {
      return value;
    }
  }

  private compare(a,b) {
    if(a.title < b.title)
      return -1;
    if(a.title > b.title)
      return 1;
    return 0;
  }
}
