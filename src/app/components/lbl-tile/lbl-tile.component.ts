import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lbl-tile',
  templateUrl: './lbl-tile.component.html',
  styleUrls: ['./lbl-tile.component.css']
})
export class LblTileComponent {

  @Input() width!: string;
  @Input() height!: string;
  @Input() text!: string;

}
