import {SubTask} from './subTask';

export class Task {
  constructor(public id: number,
              public title: string,
              public subtask: SubTask[],
              taskheaderId: string){}
}
