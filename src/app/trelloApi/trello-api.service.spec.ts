import { TestBed } from '@angular/core/testing';

import { TrelloApiService } from './trello-api.service';
import {Board} from '../model/board';
import {of} from 'rxjs/internal/observable/of';

describe('TrelloApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let trelloService: TrelloApiService;
  let mockHTTP;
  let fakeBoards: Board[];

  beforeEach(()=>{
    mockHTTP = jasmine.createSpyObj('mockHTTP', ['get','post']);
    trelloService = new TrelloApiService(mockHTTP);
  });

  it('API : getBoards() return Observable{undefined}', ()=>{
    mockHTTP.get.and.returnValue(of(fakeBoards));
    trelloService.getBoards().subscribe(
      boards => {
        expect(boards).toBeUndefined();
      }
    );

  });

  it('API: getBoards() return Observable{[]}', ()=>{
    fakeBoards = Array.of<Board>();
    mockHTTP.get.and.returnValue(of(fakeBoards));
    trelloService.getBoards().subscribe(
      boards => {
        expect(boards).toBeDefined();
      }
    );
  });

  it('API: getBoards() return Observable{board1, board2, board3}', ()=>{
    fakeBoards = Array.of(new Board(1, "board1", []), new Board(2, "board2", []));
    mockHTTP.get.and.returnValue(of(fakeBoards));
    trelloService.getBoards().subscribe(
      boards => {
        expect(boards[0].title).toEqual("board1");
        // expect(boards[0].title).toEqual("board2");
        expect(boards).toEqual(Array.of(new Board(1, "board1", []), new Board(2, "board2", [])));
      }
    );
  });
});
