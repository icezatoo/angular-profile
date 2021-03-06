import { Component, OnInit } from '@angular/core';
import { ExamplesfacadesService } from './services/examplesfacades.service';
import { Observable } from 'rxjs';
import { Todo } from './services/model';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  tododata$: Observable<Todo[]>;
  loading$: Observable<any>;
  datatodoheader: Observable<any[]>;
  constructor(private examplesfacadesService: ExamplesfacadesService) {
    this.tododata$ = this.examplesfacadesService.ongetTodo$();
    this.loading$ = this.examplesfacadesService.getloading$();
    this.datatodoheader = this.examplesfacadesService.ongetdataheader$();
  }

  ngOnInit() {
    this.examplesfacadesService.onsetTodo();
  }

  onaddtodo(event) {
    this.examplesfacadesService.addTodo(event);
  }

  onremove(event) {
    this.examplesfacadesService.removeTodolist(event);
  }

  onToggleTodolist(event) {
    this.examplesfacadesService.onToggleTodolist(event);
  }

  onFiltermenu(event) {
    this.examplesfacadesService.onsetfilter(event);
  }
}
