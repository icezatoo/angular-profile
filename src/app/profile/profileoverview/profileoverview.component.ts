import { Overview } from './../service/model/profile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profileoverview',
  templateUrl: './profileoverview.component.html',
  styleUrls: ['./profileoverview.component.scss']
})
export class ProfileoverviewComponent implements OnInit {
  @Input()
  dataoverview: Overview;
  constructor() {}

  ngOnInit() {}
}
