import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Project } from '../interfaces/project-interface';

@Service()
export class ProjectService {

  private http = inject(HttpClient);

  mapProjects = new Map<string, Project[]>;

  getProjects(): Observable<Project[] | undefined> {
    if (this.mapProjects.get('projects')) {
      return of(this.mapProjects.get('projects'));
    }
    
    return this.http.get<Project[]>(`assets/json/projects.json`).pipe(
      tap((projects) => this.mapProjects.set('projects', projects))
    )
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.http.get<Project[]>(`assets/json/projects.json`).pipe(
      map((projects) => projects.find(project => project.id == id)),
    );
  }
}
