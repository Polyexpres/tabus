import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsEditComponent } from './polls-edit.component';

describe('PollsEditComponent', () => {
  let component: PollsEditComponent;
  let fixture: ComponentFixture<PollsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
