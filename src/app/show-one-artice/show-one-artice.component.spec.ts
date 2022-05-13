import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneArticeComponent } from './show-one-artice.component';

describe('ShowOneArticeComponent', () => {
  let component: ShowOneArticeComponent;
  let fixture: ComponentFixture<ShowOneArticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneArticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneArticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
