import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoreCardComponent } from './team-score-card.component';

describe('TeamScoreCardComponent', () => {
  let component: TeamScoreCardComponent;
  let fixture: ComponentFixture<TeamScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
