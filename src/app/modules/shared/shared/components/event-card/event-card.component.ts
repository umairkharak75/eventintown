import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {


  @Input() date: string;
  @Input() city: string;
  @Input() country: string;
  @Input() venu: string;


}
