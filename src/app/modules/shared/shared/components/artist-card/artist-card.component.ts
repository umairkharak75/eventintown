import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {

  @Input() name: string;
  @Input() profilePicUrl: string;
  @Input() facebookUrl: string;
  constructor() { }



}
