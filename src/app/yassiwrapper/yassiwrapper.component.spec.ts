import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YassiwrapperComponent } from './yassiwrapper.component';

describe('YassiwrapperComponent', () => {
  let component: YassiwrapperComponent;
  let fixture: ComponentFixture<YassiwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YassiwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YassiwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
