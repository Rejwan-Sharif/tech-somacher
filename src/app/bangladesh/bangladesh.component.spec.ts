import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangladeshComponent } from './bangladesh.component';

describe('BangladeshComponent', () => {
  let component: BangladeshComponent;
  let fixture: ComponentFixture<BangladeshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BangladeshComponent]
    });
    fixture = TestBed.createComponent(BangladeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
