import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import {RouterModule} from '@angular/router';
import {TrelloApiService} from '../trelloApi/trello-api.service';
import {of} from 'rxjs';
import {Board} from '../model/board';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  /**
   * 모듈을 초기화 하는 beforeEach 코드
   */
  beforeEach(async(() => {
    const mockTrelloService={
      getBoards: ()=>of([])
    };

    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports: [RouterModule.forRoot([])],
      providers: [
        {provide: TrelloApiService, useValue:mockTrelloService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // 컴포넌트의 변화를 템플릿에 반영한다.
  });

  it('Component가 Module로부터 잘 만들어졌는지 확인', async(() => {
    expect(component).toBeTruthy();
  }));

  it('2개 보드가 있는지 확인', () =>{
    component.boards = Array.of(
      new Board(1, "보드 1", []),
      new Board(2, "보드 2", [])
    );
    fixture.detectChanges();
    const elements = fixture.debugElement.nativeElement;
    let title = elements.querySelectorAll('.title');
    console.log(title);
    expect(title[0].textContent).toContain('보드 1');
    expect(title[1].textContent).toContain('보드 2');
  });

  it('새 보드 추가 확인', ()=>{
    component.addBoard();
    fixture.detectChanges();
    expect(component.boards.length).toBe(1);
    const elements = fixture.debugElement.nativeElement;
    let title = elements.querySelectorAll('.title');
    expect(title[0].textContent).toContain('New Board');
  });
});
