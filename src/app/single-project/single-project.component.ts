import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { projectsInterface } from '../types/project.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent implements OnInit {

  project$ !: Observable<projectsInterface> | null;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project$ = this.projectService.getSingleProject(id);
    }
  }



}
