import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../services/model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input()
  todolist: Todo[] = [];
  constructor() {}

  ngOnInit() {
    // console.log(this.todolist);
    // const indexd = this.todolist.filter((data, index) => index >= 10);
    // console.log(indexd);
  }
}
