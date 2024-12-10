import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatsBlockComponent } from './game-stats-block.component';

describe('GameStatsBlockComponent', () => {
  let component: GameStatsBlockComponent;
  let fixture: ComponentFixture<GameStatsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameStatsBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStatsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
