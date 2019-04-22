import { Component, OnInit } from '@angular/core';
import {TrelloApiService} from '../trelloApi/trello-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public _trelloApiService:TrelloApiService) { }

  ngOnInit() {
    this._trelloApiService.getBoards();
  }

}
