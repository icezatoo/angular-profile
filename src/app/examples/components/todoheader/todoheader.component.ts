import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todoheader',
  templateUrl: './todoheader.component.html',
  styleUrls: ['./todoheader.component.scss']
})
export class TodoheaderComponent implements OnInit {
  @Input()
  lengthtodo: number = 0;
  public data: boolean = true;
  constructor() {}

  ngOnInit() {}
}
