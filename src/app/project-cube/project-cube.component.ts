
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { projectsInterface } from '../types/project.interface';
@Component({
  selector: 'app-project-cube',
  templateUrl: './project-cube.component.html',
  styleUrl: './project-cube.component.css'
})
export class ProjectCubeComponent {

  @ViewChild('cube') cubeElement!: ElementRef;

  projects$: Observable<projectsInterface[]> | null = null;
  currentFace = 0;
  totalFaces = 6; // Assuming you have 6 projects. Adjust if needed.

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.projectsService.getAllProjects();
  }

  rotateCube(direction: 'left' | 'right') {
    if (direction === 'right') {
      this.currentFace = (this.currentFace + 1) % this.totalFaces;
    } else {
      this.currentFace = (this.currentFace - 1 + this.totalFaces) % this.totalFaces;
    }
    this.updateCubeRotation();
  }

  updateCubeRotation() {
    if (this.cubeElement) {
      const rotationY = this.currentFace * -90;
      this.cubeElement.nativeElement.style.transform = `rotateY(${rotationY}deg)`;
    }
  }
}