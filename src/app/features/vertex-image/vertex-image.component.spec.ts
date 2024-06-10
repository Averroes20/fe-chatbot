import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexImageComponent } from './vertex-image.component';

describe('VertexImageComponent', () => {
  let component: VertexImageComponent;
  let fixture: ComponentFixture<VertexImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertexImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VertexImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
