import {Task} from './task';

export class Board {
  constructor(public id: number,
              public title: string,
              public task: Task[]) {}
}
