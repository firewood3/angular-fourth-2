import { Injectable } from '@angular/core';
import {Board} from '../model/board';
import {Task} from '../model/task';
import {Subtask} from '../model/subtask';

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {

  public boards: Board[];

  constructor() {
    this.boards = this.createBoards();
  }

  public getBoards(): Board[] {
    return this.boards;
  }

  public addBoard(newBoard: Board): void {
    this.boards.push(newBoard);
  }


  private createBoards(): Board[] {
    return Array.of(this.getBoard1(), this.getBoard2(), this.getBoard3());
  }

  private getBoard1(): Board {
    const task1 = new Task(1, "b1-t1", Array.of(new Subtask(1, "b1-t1-st1"), new Subtask(2, "b1-t1-st2")), "1");
    const task2 = new Task(2, "b1-t2", Array.of(new Subtask(1, "b1-t2-st2"), new Subtask(2, "b1-t2-st2")), "2");
    return new Board(1, "b1", Array.of(task1, task2));
  }

  private getBoard2(): Board {
    const task1 = new Task(1, "b2-t1", Array.of(new Subtask(1, "b2-t1-st1"), new Subtask(2, "b2-t1-st2")), "1");
    const task2 = new Task(2, "b2-t2", Array.of(new Subtask(1, "b2-t2-st1"), new Subtask(2, "b2-t2-st2")), "2");
    return new Board(2, "b2", Array.of(task1, task2));
  }

  private getBoard3(): Board {
    const task1 = new Task(1, "b3-t1", Array.of(new Subtask(1, "b3-t1-st1"), new Subtask(2, "b3-t1-st2")), "1");
    const task2 = new Task(2, "b3-t2", Array.of(new Subtask(1, "b3-t2-st1"), new Subtask(2, "b3-t2-st2")), "2");
    return new Board(3, "b3", Array.of(task1, task2));
  }
}
