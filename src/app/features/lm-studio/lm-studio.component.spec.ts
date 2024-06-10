import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmStudioComponent } from './lm-studio.component';

describe('LmStudioComponent', () => {
  let component: LmStudioComponent;
  let fixture: ComponentFixture<LmStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LmStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LmStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
