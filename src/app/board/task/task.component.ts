import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subtask} from '../../model/subtask';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;
  @Input()
  subTasks: Subtask[];
  @Output()
  public onAddSubTask: EventEmitter<Subtask>;
  @Output()
  public onEmitData: EventEmitter<Subtask>;

  addsubTaskText: string;
  constructor() {
    this.onAddSubTask = new EventEmitter();
  }

  ngOnInit() {
  }

  public addsubTaskOnEnter(event) {
    if (event.keyCode === 13) {
      if (this.addsubTaskText && this.addsubTaskText.trim() !== '') {
        this.addsubTask();
        this.addsubTaskText = '';
      } else {
        this.clearAddsubTask();
      }
    } else if (event.keyCode === 27) {
      this.clearAddsubTask();
    }
  }

  private addsubTask() {
    this.subTasks = this.subTasks || [];
    const newsubTask = new Subtask(this.task.subtask.length + 1, this.addsubTaskText);
    this.task.subtask.push(newsubTask);
    this.onAddSubTask.emit(newsubTask);
  }

  private clearAddsubTask() {
    this.addsubTaskText = '';
  }

}
