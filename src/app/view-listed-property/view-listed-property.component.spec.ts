import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListedPropertyComponent } from './view-listed-property.component';

describe('ViewListedPropertyComponent', () => {
  let component: ViewListedPropertyComponent;
  let fixture: ComponentFixture<ViewListedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListedPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
