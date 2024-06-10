import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexMultimodalComponent } from './vertex-multimodal.component';

describe('VertexMultimodalComponent', () => {
  let component: VertexMultimodalComponent;
  let fixture: ComponentFixture<VertexMultimodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertexMultimodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VertexMultimodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
