import { Component, OnInit } from '@angular/core';
import { ExamplesfacadesService } from './services/examplesfacades.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  constructor(private examplesfacadesService: ExamplesfacadesService) {
    // this.examplesfacadesService.ongetTodo$().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit() {
    this.examplesfacadesService.onsetTodo();
  }
}
