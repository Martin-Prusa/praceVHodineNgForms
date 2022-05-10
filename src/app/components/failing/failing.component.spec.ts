import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailingComponent } from './failing.component';

describe('FailingComponent', () => {
  let component: FailingComponent;
  let fixture: ComponentFixture<FailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
