import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { BoardComponent } from './components/board/board.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { LblTileComponent } from './components/lbl-tile/lbl-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupStepsComponent } from './components/setup-steps/setup-steps.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    MainPageComponent,
    SvgIconComponent,
    LblTileComponent,
    SetupStepsComponent,
    PlayerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
