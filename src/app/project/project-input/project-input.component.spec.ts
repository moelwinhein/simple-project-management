import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInputComponent } from './project-input.component';

describe('ProjectInputComponent', () => {
  let component: ProjectInputComponent;
  let fixture: ComponentFixture<ProjectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
