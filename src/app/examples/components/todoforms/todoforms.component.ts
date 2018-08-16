import { Component, OnInit, Input } from '@angular/core';
import { ExamplesfacadesService } from '../../services';

@Component({
  selector: 'app-todoforms',
  templateUrl: './todoforms.component.html',
  styleUrls: ['./todoforms.component.scss']
})
export class TodoformsComponent implements OnInit {
  public titlevalue = '';
  constructor(private examplesfacadesService: ExamplesfacadesService) {}

  ngOnInit() {}

  AddTodo(event) {
    this.examplesfacadesService.addTodo(this.titlevalue);
    event.preventDefault();
    this.titlevalue = '';
  }
}
