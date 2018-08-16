import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoforms',
  templateUrl: './todoforms.component.html',
  styleUrls: ['./todoforms.component.scss']
})
export class TodoformsComponent implements OnInit {
  public titlevalue = '';
  @Output()
  public onaddtodo = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  AddTodo(event) {
    event.preventDefault();
    this.onaddtodo.emit(this.titlevalue);
    this.titlevalue = '';
  }
}
