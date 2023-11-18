import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActiveGamesComponent } from './all-active-games.component';

describe('AllActiveGamesComponent', () => {
  let component: AllActiveGamesComponent;
  let fixture: ComponentFixture<AllActiveGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllActiveGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllActiveGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
