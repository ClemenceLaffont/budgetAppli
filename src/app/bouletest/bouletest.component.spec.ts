import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouletestComponent } from './bouletest.component';

describe('BouletestComponent', () => {
  let component: BouletestComponent;
  let fixture: ComponentFixture<BouletestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouletestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
