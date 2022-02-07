import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YassiComponent } from './yassi.component';

describe('YassiComponent', () => {
  let component: YassiComponent;
  let fixture: ComponentFixture<YassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YassiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
