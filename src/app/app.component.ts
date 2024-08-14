import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HanzalaPortfolio';

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.incrementViewsOnVisit();
  }

  incrementViewsOnVisit() {
    this.projectService.incrementViews();
  }
}
