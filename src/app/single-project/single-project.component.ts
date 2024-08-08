import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { projectsInterface } from '../types/project.interface';
import { Observable, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent implements OnInit {

  project$!: Observable<projectsInterface>;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap(params => {
        const projectId = params.get('id');
        return this.projectService.getSingleProject(projectId || '');
      })
    );
  }

  nextImage() {
    this.project$.pipe(take(1)).subscribe(project => {
      this.currentImageIndex = (this.currentImageIndex + 1) % project.Images.length;
    });
  }

  prevImage() {
    this.project$.pipe(take(1)).subscribe(project => {
      this.currentImageIndex = (this.currentImageIndex - 1 + project.Images.length) % project.Images.length;
    });
  }

  setCurrentImage(index: number) {
    this.currentImageIndex = index;
  }


}
