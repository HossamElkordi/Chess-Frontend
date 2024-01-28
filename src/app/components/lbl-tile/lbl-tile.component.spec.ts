import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LblTileComponent } from './lbl-tile.component';

describe('LblTileComponent', () => {
  let component: LblTileComponent;
  let fixture: ComponentFixture<LblTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LblTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LblTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
