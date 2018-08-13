import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../service/model/profile';

@Component({
  selector: 'app-layoutcontainer',
  templateUrl: './layoutcontainer.component.html',
  styleUrls: ['./layoutcontainer.component.scss']
})
export class LayoutcontainerComponent implements OnInit {
  @Input()
  public datalist: any;
  @Input()
  public titlelayout: string;
  @Input()
  public offcontent: boolean = false;
  constructor() {}

  ngOnInit() {
    console.log(this.datalist, 'dataLayoutcontainer');
  }
}
