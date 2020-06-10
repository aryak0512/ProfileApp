import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  

  projects=[]
  constructor(projectService:ProjectService) { 
    this.projects=projectService.getProject();
  }

  ngOnInit(): void {
  }

  showLink(link){
    

  }

}
