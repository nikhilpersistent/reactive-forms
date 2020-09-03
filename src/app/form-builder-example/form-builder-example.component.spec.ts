import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderExampleComponent } from './form-builder-example.component';

describe('FormBuilderExampleComponent', () => {
  let component: FormBuilderExampleComponent;
  let fixture: ComponentFixture<FormBuilderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
