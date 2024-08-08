import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor() { }

  skills = [
    { name: 'JavaScript', logo: 'assets/logos/javascript.svg' },
    { name: 'TypeScript', logo: 'assets/logos/typescript.svg' },
    { name: 'Python', logo: 'assets/logos/python.svg' },
    { name: 'SQL', logo: 'assets/logos/sql.svg' },
    { name: 'Angular', logo: 'assets/logos/angular.svg' },
    { name: 'Ngrx', logo: 'assets/logos/ngrx.svg' },
    { name: 'Node.js', logo: 'assets/logos/nodejs.svg' },
    { name: 'TailwindCSS', logo: 'assets/logos/tailwindcss.svg' },
    { name: 'AI/ML', logo: 'assets/logos/ai-ml.png' },
    { name: 'Ionic', logo: 'assets/logos/ionic.svg' },
    { name: 'PrimeNG', logo: 'assets/logos/primeng.svg' },
    { name: 'Firebase', logo: 'assets/logos/firebase.svg' },
  ];


  openPdf() {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');

  }
}