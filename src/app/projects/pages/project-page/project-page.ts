import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';
import { ProjectService } from '../../services/project-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-page',
  imports: [RouterLink],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {

  private activatedRoute = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private title = inject(Title);

  project = toSignal(
    this.activatedRoute.params.pipe(
      switchMap(params => this.projectService.getProjectById(parseInt(params['id']))),
      tap(project => this.title.setTitle(`Proyecto ${project?.title}`))
    )
  );
}
