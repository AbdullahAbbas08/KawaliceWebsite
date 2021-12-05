import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStarComponent } from './super-star.component';

describe('SuperStarComponent', () => {
  let component: SuperStarComponent;
  let fixture: ComponentFixture<SuperStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
