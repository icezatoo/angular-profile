import { Component, OnInit, Input } from '@angular/core';
import { Overview } from '../service/model/profile';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.scss']
})
export class ProfileheaderComponent implements OnInit {
  @Input()
  dataoverview: Overview;
  constructor() {}

  ngOnInit() {}
}
