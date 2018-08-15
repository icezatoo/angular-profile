import { Component, OnInit } from '@angular/core';
import { ExamplesfacadesService } from './services/examplesfacades.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  data: any[];
  constructor(private examplesfacadesService: ExamplesfacadesService) {
    // this.examplesfacadesService.ongetTodo$().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit() {
    this.data = [
      { id: 1, title: ' name' },
      { id: 2, title: ' etto' },
      { id: 3, title: ' eee' },
      { id: 4, title: ' aaa' }
    ];
    this.examplesfacadesService.onsetTodo();
  }
}
