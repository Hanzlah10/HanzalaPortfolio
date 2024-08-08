import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCubeComponent } from './project-cube.component';

describe('ProjectCubeComponent', () => {
  let component: ProjectCubeComponent;
  let fixture: ComponentFixture<ProjectCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
