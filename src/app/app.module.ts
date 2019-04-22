import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BoardComponent } from './board/board.component';
import {RouterModule, Routes} from '@angular/router';
import { TaskComponent } from './board/task/task.component';
import { SubtaskComponent } from './board/task/subtask/subtask.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomSort} from './pipes/customsort.pipe';
import { FooterComponent } from './footer/footer.component';

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
    SubtaskComponent,
    CustomSort,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
