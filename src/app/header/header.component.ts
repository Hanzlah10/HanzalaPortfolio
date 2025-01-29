import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { PersistenceService } from '../services/persistence.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  views$!: Observable<any>;

  constructor(private projectService: ProjectsService, private persistence: PersistenceService) { }

  ngOnInit() {
    this.views$ = this.projectService.getViews();
    this.isDarkMode = this.persistence.get('theme') === 'dark';
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    this.persistence.set('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
