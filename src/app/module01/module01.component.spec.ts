import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module01Component } from './module01.component';

describe('Module01Component', () => {
  let component: Module01Component;
  let fixture: ComponentFixture<Module01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
