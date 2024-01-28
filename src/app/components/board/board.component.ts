import { Component, QueryList, ViewChildren, Output, EventEmitter, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { ChessService } from 'src/app/services/chess.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(private http: ChessService) {}

  @Input() mode!: string;
  @Input() diff!: string;
  @Output() piece_moved = new EventEmitter<number>();

  game_id!: string;
  turn: number = -1;
  canSelect: boolean = true
  
  board: boolean[][] = [
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
  ]

  col_title: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  row_title: string[] = ['8', '7', '6', '5', '4', '3', '2', '1']

  pieces!: string[][]
  legal_moves!: string[];

  paths: Record<string, string> = {
    'k': 'assets/chess_pieces/bk.svg',
    'K': 'assets/chess_pieces/wk.svg',
    'q': 'assets/chess_pieces/bq.svg',
    'Q': 'assets/chess_pieces/wq.svg',
    'b': 'assets/chess_pieces/bb.svg',
    'B': 'assets/chess_pieces/wb.svg',
    'n': 'assets/chess_pieces/bn.svg',
    'N': 'assets/chess_pieces/wn.svg',
    'r': 'assets/chess_pieces/br.svg',
    'R': 'assets/chess_pieces/wr.svg',
    'p': 'assets/chess_pieces/bp.svg',
    'P': 'assets/chess_pieces/wp.svg',
    '.': ''
  }

  white_tile_color: string = '#F4E2E2'
  black_tile_color: string = '#562B63'

  firstCell: [[number, number], string] = [[-1, -1], '.'];
  secondCell: [[number, number], string] = [[-1, -1], '.'];

  @ViewChildren(TileComponent) tiles!: QueryList<TileComponent>;

  getColor(i: number, j: number){
    return this.board[i][j] ? this.white_tile_color : this.black_tile_color;
  }

  select(cellIndex: [[number, number], string]){
    let i = cellIndex[0][0]
    let j = cellIndex[0][1]
    let n = cellIndex[1]

    if(this.firstCell[0][0] == -1){
      if(this.pieces[i][j] == '.'){
        this.resetSelection()  
        return
      }
      this.firstCell = [[i, j], n]
      this.http.get_possible_moves_from(this.game_id, n).subscribe(res => {
        this.legal_moves = res
      })
    }else{
      this.secondCell = [[i, j], n]
      this.processMove()
    }
  }

  processMove(){
    if(this.secondCell[0][0] != this.firstCell[0][0] || this.secondCell[0][1] != this.firstCell[0][1]){
      if(this.legal_moves.indexOf(this.secondCell[1]) != -1){
        this.http.make_move(this.game_id, this.firstCell[1] + this.secondCell[1]).subscribe(res => {
          this.pieces = res
          this.turn = (this.turn + 1) % 2
          this.piece_moved.emit(this.turn)
          if(this.mode == 'Single Player' && this.turn % 2 == 1){
            this.http.make_ai_move(this.game_id).subscribe(res_ai => {
              this.pieces = res_ai
              this.turn = (this.turn + 1) % 2
              this.piece_moved.emit(this.turn)
            })
          }
        })
      }
    }
    this.firstCell = [[-1, -1], '.']
    this.secondCell = [[-1, -1], '.']
    this.legal_moves = []
    this.resetSelection()
  }

  resetSelection(){
    for (let index = 0; index < this.tiles['_results'].length; index++) {
      this.tiles['_results'][index].deselect()
    }
  }

  ngOnInit(){
    this.http.start_game(this.mode, this.diff).subscribe(res => {
      this.game_id = res[0]
      this.pieces = res[1]
      ++this.turn
      this.piece_moved.emit(this.turn)
    })
  }
}
