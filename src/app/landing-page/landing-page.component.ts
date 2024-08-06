import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { projectsInterface } from '../types/project.interface';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: 'landing-page.component.html',
  styleUrl: 'landing-page.component.css',
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  projects$: Observable<projectsInterface[]> | null = null;
  isDarkMode = false; // You can toggle this based on user preference or system setting

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.projectsService.getAllProjects();
  }
}