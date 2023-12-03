import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBlockComponent } from './score-block.component';

describe('ScoreBlockComponent', () => {
  let component: ScoreBlockComponent;
  let fixture: ComponentFixture<ScoreBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
