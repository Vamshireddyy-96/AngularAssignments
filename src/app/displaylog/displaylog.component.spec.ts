import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylogComponent } from './displaylog.component';

describe('DisplaylogComponent', () => {
  let component: DisplaylogComponent;
  let fixture: ComponentFixture<DisplaylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaylogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
