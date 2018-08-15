import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todoforms',
  templateUrl: './todoforms.component.html',
  styleUrls: ['./todoforms.component.scss']
})
export class TodoformsComponent implements OnInit {
  public value = '';
  constructor() {}

  ngOnInit() {}
}
