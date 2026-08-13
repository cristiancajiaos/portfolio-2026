import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  imports: [JsonPipe, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

  private projectService = inject(ProjectService);

  projectResource = rxResource({
    params: () => {
      return {foo: 'foo'}
    },
    stream: ({params}) => {
      return this.projectService.getProjects();
    }
  });
}
