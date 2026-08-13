import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-project-page',
  imports: [RouterLink],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage implements OnInit {


  private activatedRoute = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  ngOnInit(): void {
    this.projectService.getProjectById(1).subscribe(foo => {
      console.log(foo);
    });
  }

  project = toSignal(
    this.activatedRoute.params.pipe(
      switchMap(params => this.projectService.getProjectById(parseInt(params['id'])))
    )
  );
}
