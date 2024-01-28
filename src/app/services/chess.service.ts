import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  constructor(private _http: HttpClient) { }

  private origin = "http://127.0.0.1:5000/";

  start_game(mode: string, diff: string){
    return this._http.get<[string, string[][]]>(`${this.origin}start/${mode}/${diff}`)
  }

  get_possible_moves_from(game_id: string, start: string){
    return this._http.get<string[]>(`${this.origin}possible_moves_from/${game_id}/${start}`)
  }

  make_move(game_id: string, move: string){
    return this._http.get<string[][]>(`${this.origin}make_move/${game_id}/${move}`)
  }

  make_ai_move(game_id: string){
    return this._http.get<string[][]>(`${this.origin}make_move/${game_id}`)
  }
}
