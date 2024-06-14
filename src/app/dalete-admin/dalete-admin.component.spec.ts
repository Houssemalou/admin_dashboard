import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaleteAdminComponent } from './dalete-admin.component';

describe('DaleteAdminComponent', () => {
  let component: DaleteAdminComponent;
  let fixture: ComponentFixture<DaleteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaleteAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaleteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
