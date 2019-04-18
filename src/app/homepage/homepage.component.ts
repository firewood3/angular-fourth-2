import { Component, OnInit } from '@angular/core';
import {Board} from '../model/board';
import {TrelloApiService} from '../trelloApi/trello-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  boards: Board[];

  constructor(private trelloApiService: TrelloApiService) { }

  ngOnInit() {
    this.boards = this.trelloApiService.getBoards();
  }

  public addBoard(){
    const newBoard = new Board(this.boards.length + 1, "New Board" + (this.boards.length+1), Array());
    this.trelloApiService.addBoard(newBoard);
  }
}
