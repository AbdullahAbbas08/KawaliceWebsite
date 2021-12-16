import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADsComponent } from './ads.component';

describe('ADsComponent', () => {
  let component: ADsComponent;
  let fixture: ComponentFixture<ADsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
