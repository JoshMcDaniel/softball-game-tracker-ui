import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGameScoreboardComponent } from './active-game-scoreboard.component';

describe('ActiveGameScoreboardComponent', () => {
  let component: ActiveGameScoreboardComponent;
  let fixture: ComponentFixture<ActiveGameScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveGameScoreboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveGameScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
