import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { projectsInterface } from '../types/project.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {

  constructor(private projectsService: ProjectsService) {
    this.loadProjects();
  }
  projects$: Observable<projectsInterface[]> | null = null;

  loadProjects() {
    this.projects$ = this.projectsService.getAllProjects();
  }

}
