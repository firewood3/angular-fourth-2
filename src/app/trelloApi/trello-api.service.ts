import { Injectable } from '@angular/core';
import {Board} from '../model/board';
import {Task} from '../model/task';
import {SubTask} from '../model/subTask';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {
  public boards: Board[];
  private _boardUrl = './assets/json/boards.json';

  constructor(private _http: HttpClient) {
  }

  public getBoardsJSON(): Observable<any> {
    console.log(this.boards);
    if(this.boards == undefined) {
      return this._http.get(this._boardUrl)
        .pipe(
          tap(x => this.saveBoards(x))
        );
    } else {
      return of(this.boards);
    }
  }

  private saveBoards(boards: any) {
    this.boards = boards;
    console.log(boards);
    console.log(this.boards);
  }
}
