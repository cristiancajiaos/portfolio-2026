import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from '../interfaces/project-interface';

@Service()
export class ProjectService {

  private http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`assets/json/projects.json`);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.http.get<Project[]>(`assets/json/projects.json`).pipe(
      map((projects) => projects.find(project => project.id == id))
    );
  }
}
