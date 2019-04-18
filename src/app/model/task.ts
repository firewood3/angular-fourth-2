import {Subtask} from './subtask';

export class Task {
  constructor(public id: number,
              public title: string,
              public subtask: Subtask[],
              taskheaderId: string){}
}
