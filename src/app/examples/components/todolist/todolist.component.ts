import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../services/model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input()
  todolist: Todo[] = [];
  @Output()
  onremove = new EventEmitter<string>();

  @Output()
  onToggleTodolist = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onremovetodo(id) {
    this.onremove.emit(id);
  }

  onToggleTodo(id) {
    this.onToggleTodolist.emit(id);
  }
}
