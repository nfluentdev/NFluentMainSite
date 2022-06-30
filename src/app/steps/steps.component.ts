import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  @Input() options="";
  @Input() title="";
  @Input() icon="";
  @Input() step="";

  constructor() { }

  ngOnInit(): void {
  }

}
