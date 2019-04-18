import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubTask} from '../../model/subTask';
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
  subTasks: SubTask[];
  @Output()
  public onAddSubTask: EventEmitter<SubTask>;

  editingtask = false;
  addsubTaskText: string;
  currentTitle: string;
  constructor(private el: ElementRef) {
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

  addsubTaskOnBlur() {
    if (this.addsubTaskText && this.addsubTaskText.trim() !== '') {
      this.addsubTask();
    }
    this.clearAddsubTask();
  }

  private addsubTask() {
    this.subTasks = this.subTasks || [];
    console.log(this.task);
    const newsubTask = new SubTask(this.task.subtask.length + 1, this.addsubTaskText);
    this.task.subtask.push(newsubTask);
    this.onAddSubTask.emit(newsubTask);
  }

  private clearAddsubTask() {
    this.addsubTaskText = '';
  }

  edittask() {
    this.currentTitle = this.task.title;
    this.editingtask = true;
    const input = this.el.nativeElement
      .getElementsByClassName('task-header')[0]
      .getElementsByTagName('input')[0];

    setTimeout(function () { input.focus(); }, 0);
  }

  updatetaskOnBlur() {
    if (this.editingtask) {
      this.updatetask();
      this.clearAddsubTask();
    }
  }

  updatetask() {
    if (this.task.title && this.task.title.trim() !== '') {
      this.editingtask = false;
    } else {
      this.cleadAddtask();
    }
  }

  cleadAddtask() {
    this.task.title = this.currentTitle;
    this.editingtask = false;
  }

  addtaskOnEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.updatetask();
    } else if (event.keyCode === 27) {
      this.cleadAddtask();
    }
  }
}
