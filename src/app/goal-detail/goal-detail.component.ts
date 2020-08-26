import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {

  @Input() goals:Goal;

  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
