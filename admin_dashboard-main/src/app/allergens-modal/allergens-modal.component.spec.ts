import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergensModalComponent } from './allergens-modal.component';

describe('AllergensModalComponent', () => {
  let component: AllergensModalComponent;
  let fixture: ComponentFixture<AllergensModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllergensModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllergensModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
