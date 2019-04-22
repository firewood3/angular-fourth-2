import {Component, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {Board} from '../model/board';
import {ActivatedRoute} from '@angular/router';
import {TrelloApiService} from '../trelloApi/trello-api.service';
import {Task} from '../model/task';
import {SubTask} from '../model/subTask';

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
  currentTitle: string;

  constructor(public el: ElementRef, private _route: ActivatedRoute, private trelloApiService: TrelloApiService) { }

  ngOnInit() {
    const boardId = this._route.snapshot.params['id'];
    this.board = this.trelloApiService.boards.find(x => x.id == boardId);
  }

  public addSubTask(event: SubTask) {
    console.log("fire task data to board");
    console.log(event);
    console.log(this.board);
  }

  public addtaskOnEnter(event: KeyboardEvent) {
    if(event.keyCode === 13) {
      // 13 == enter
      if (this.addtaskText && this.addtaskText.trim() !== '') {
        this.addtask();
        // this.updateBoardWidth();
      } else {
        this.clearAddtask();
      }
    } else if (event.keyCode === 27) {
      // 27 == escape
      this.clearAddtask();
    }
  }

  private clearAddtask() {
    this.addtaskText = '';
  }

  public addtask() {
    let id = this.board.task.length + 1;
    this.board.task.push(new Task(id, this.addtaskText, Array.of(), id.toString()));
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

  private editTitle() {
    this.currentTitle = this.board.title;
    this.editingTitle = true;

    const input = this.el.nativeElement
      .getElementsByClassName('board-title')[0]
      .getElementsByTagName('input')[0];

    setTimeout(function () { input.focus(); }, 0);
  }

  private blurOnEnter(event) {
    if (event.keyCode === 13) {
      event.target.blur();
    }
    else if (event.keyCode === 27) {
      this.board.title = this.currentTitle;
      this.editingTitle = false;
    }
  }
  updateBoard() {
    this.editingTitle = false;
    document.title = this.board.title + ' | Generic Task Manager';
    this.trelloApiService.boards.find(x => x.id == this.board.id).title = this.board.title;
  }
  addtaskOnBlur() {
    if (this.addtaskText && this.addtaskText.trim() !== '') {
      this.addtask();
      this.updateBoardWidth();
    }
    this.clearAddtask();
  }
}
