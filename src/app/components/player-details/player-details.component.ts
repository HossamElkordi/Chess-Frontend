import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  @Input() name!: string;
  @Input() icon!: string;
  @Input() color!: string;
  @Input() isTurn: string = 'noturn';
}
