import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftballGameListComponent } from './softball-game-list.component';

describe('SoftballGameListComponent', () => {
  let component: SoftballGameListComponent;
  let fixture: ComponentFixture<SoftballGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftballGameListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftballGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
