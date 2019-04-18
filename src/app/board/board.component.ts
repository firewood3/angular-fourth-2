import {Component, EventEmitter, OnInit} from '@angular/core';
import {Board} from '../model/board';
import {ActivatedRoute} from '@angular/router';
import {TrelloApiService} from '../trelloApi/trello-api.service';
import {Task} from '../model/task';
import {Subtask} from '../model/subtask';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;
  addtaskText: string;

  boardWidth: number;
  tasksAdded = 0;

  editingTitle = false;

  constructor(private _route: ActivatedRoute, private trelloApiService: TrelloApiService) { }

  ngOnInit() {
    const boardId = this._route.snapshot.params['id'];
    this.board = this.trelloApiService.boards.find(x => x.id == boardId);
  }

  public addSubTask(event: Subtask) {
    console.log(event);
    console.log(this.board);
  }

  public addtaskOnEnter(event: KeyboardEvent) {
    if(event.keyCode === 13) {
      if (this.addtaskText && this.addtaskText.trim() !== '') {
        this.addtask();
        // this.updateBoardWidth();
      } else {
        this.clearAddtask();
      }
    } else if (event.keyCode === 27) {
      this.clearAddtask();
    }
  }

  private clearAddtask() {
    this.addtaskText = '';
  }

  private addtask() {
    const newID = this.board.task.length + 1;
    const newtask = <Task>{
      title: this.addtaskText,
      id: newID
    };
    this.board.task.push(newtask);
    this.addtaskText = '';
  }

  private updateBoardWidth() {
    this.boardWidth = ((this.board.task.length + 1) * 280) + 10;

    if (this.boardWidth > document.body.scrollWidth) {
      document.getElementById('main').style.width = this.boardWidth + 'px';
    } else {
      document.getElementById('main').style.width = '100%';
    }

    if (this.tasksAdded > 0) {
      const wrapper = document.getElementById('content-wrapper');
      wrapper.scrollLeft = wrapper.scrollWidth;
    }

    this.tasksAdded++;
  }

}
