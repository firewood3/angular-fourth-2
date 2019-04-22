import { BoardComponent } from './board.component';
import {Board} from '../model/board';
import {Task} from '../model/task';

describe('BoardComponent', () => {
  let boardComponent: BoardComponent;
  let mockElementRef, mockRoute, mockTrelloService;

  beforeEach(()=>{
    boardComponent = new BoardComponent(mockElementRef, mockRoute, mockTrelloService);
  });

  it('기존 작업에 추가 테스트', ()=>{
    boardComponent.addtaskText = "더미";
    boardComponent.board = new Board(1, "보드 1", Array.of());
    boardComponent.board.task.push(new Task(1, "작업 1", Array.of(), "1"));
    boardComponent.addtask();

    expect(boardComponent.board.task.length).toBe(2);
    expect(boardComponent.board.task[1].title).toBe("더미");
  });

  it('첫 번째 작업 추가 테스트', ()=>{
    boardComponent.addtaskText = "더미";
    boardComponent.board = new Board(1, "보드 1", Array.of());
    boardComponent.addtask();
    expect(boardComponent.board.task.length).toBe(1);
    expect(boardComponent.board.task[0].id).toBe(1);
    expect(boardComponent.board.task[0].title).toBe("더미");
  });
});
