import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetupStepsComponent } from '../setup-steps/setup-steps.component';
import { PlayerDetailsComponent } from '../player-details/player-details.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private dialog: MatDialog) {}

  mode!: string;
  diff!: string;
  wname!: string;
  bname!: string;
  wicon!: string;
  bicon!: string;

  turn: number = -1;

  openDialog() {
    this.dialog.open(SetupStepsComponent, { disableClose: true }).afterClosed().subscribe(res => {
      this.mode = res[0]
      if (this.mode == 'Single Player'){
        this.wname = res[1]
        this.diff = res[2]
        this.bname = 'PC'
        this.bicon = 'computer'
      }else{
        this.wname = res[1][0]
        this.bname = res[1][1]
        this.bicon = 'person'
      }
      this.wicon = 'person'
    });
  }

  updateTurn(turn: number){
    this.turn = turn;
  }

  ngOnInit(){
    this.openDialog()
  }
}
