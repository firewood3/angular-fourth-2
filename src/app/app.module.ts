import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import {RouterModule, Routes} from '@angular/router';
import { TaskComponent } from './board/task/task.component';
import { SubtaskComponent } from './board/task/subtask/subtask.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'board/:id', component: BoardComponent, pathMatch: 'full' },

  { path: '', component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BoardComponent,
    TaskComponent,
    SubtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
