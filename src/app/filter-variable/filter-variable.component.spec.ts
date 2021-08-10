import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVariableComponent } from './filter-variable.component';

describe('FilterVariableComponent', () => {
  let component: FilterVariableComponent;
  let fixture: ComponentFixture<FilterVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
