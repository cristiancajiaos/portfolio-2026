import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SingleProject } from '../../components/single-project/single-project';

@Component({
  selector: 'app-projects-page',
  imports: [SingleProject],
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
