import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project-interface';

@Component({
  selector: 'app-single-project',
  imports: [],
  templateUrl: './single-project.html',
  styleUrl: './single-project.css',
})
export class SingleProject {

  project = input.required<Project>();
}
