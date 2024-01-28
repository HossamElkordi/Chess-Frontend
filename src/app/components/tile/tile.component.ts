import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() color!: string;
  @Input() piecePath!: string;
  @Input() row!: number;
  @Input() col!: number;
  @Input() name!: string;

  _canSelect!: boolean;
  @Input() set canSelect(value: boolean) {
      this._canSelect = value;
  }

  @Output() cellIndex = new EventEmitter<[[number, number], string]>();

  selected: boolean = false;
  class: string = 'inner-tile'

  setSelected(){
    if(this._canSelect){
      this.selected = !this.selected;
      if(this.selected){
        this.class = 'selected-inner-tile'
      }else{
        this.class = 'inner-tile'
      }
      this.emitCellIndex()
    }
  }

  deselect(){
    this.selected = false;
    this.class = 'inner-tile'
  }

  emitCellIndex(){
    this.cellIndex.emit([[this.row, this.col], this.name])
  }
}
