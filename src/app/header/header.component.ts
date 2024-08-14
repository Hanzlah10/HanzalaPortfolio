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
  // views!: any;
  ngOnInit() {
    this.views$ = this.projectService.getViews()
    // this.projectService.getViews().subscribe((data) => {
    //   console.log(data);
    // });
    console.log('running');

    console.log(this.views$);

  }

  // ngOnInit(): void {

  // }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }




}
