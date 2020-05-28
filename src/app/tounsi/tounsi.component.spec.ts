import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TounsiComponent } from './tounsi.component';

describe('TounsiComponent', () => {
  let component: TounsiComponent;
  let fixture: ComponentFixture<TounsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TounsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TounsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
