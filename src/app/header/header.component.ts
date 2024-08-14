import { Component, OnInit } from '@angular/core';
import { projectsInterface } from '../types/project.interface';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private projectService: ProjectsService) { }
  isDarkMode = false;
  views$!: Observable<any>;
  ngOnInit() {
    this.views$ = this.projectService.getViews()
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }




}
