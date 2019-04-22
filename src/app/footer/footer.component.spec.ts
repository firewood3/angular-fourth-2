import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {APP_BASE_HREF} from '@angular/common';
import {TrelloApiService} from '../trelloApi/trello-api.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    const mockTrelloService={
      getBoards: ()=>of([])
    };
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [HttpClientModule],
      providers: [
        {provide: APP_BASE_HREF, useValue:'/'},
        {provide: TrelloApiService, useValue: mockTrelloService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
