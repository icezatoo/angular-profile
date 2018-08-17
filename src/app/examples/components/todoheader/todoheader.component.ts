import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoheader',
  templateUrl: './todoheader.component.html',
  styleUrls: ['./todoheader.component.scss']
})
export class TodoheaderComponent implements OnInit {
  @Input()
  dataheader: any[];
  @Output()
  onFiltermenu = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onfilter(data) {
    this.onFiltermenu.emit(data);
  }
}
