import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Experience, Project } from '../service/model/profile';
@Component({
  selector: 'app-layoutcontainer',
  templateUrl: './layoutcontainer.component.html',
  styleUrls: ['./layoutcontainer.component.scss'],
  animations: [
    trigger('liststate', [
      state(
        'inactive',
        style({
          transform: 'scale(1)'
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.1)'
        })
      ),
      transition('inactive <=> active', animate('100ms ease-out'))
    ])
  ]
})
export class LayoutcontainerComponent implements OnInit {
  @Input()
  public datalist: Experience[] | Project[];
  @Input()
  public titlelayout: string;
  @Input()
  public offcontent: boolean = false;
  constructor() {}

  ngOnInit() {}
}
