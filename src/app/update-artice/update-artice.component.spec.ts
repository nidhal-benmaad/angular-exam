import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticeComponent } from './update-artice.component';

describe('UpdateArticeComponent', () => {
  let component: UpdateArticeComponent;
  let fixture: ComponentFixture<UpdateArticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
