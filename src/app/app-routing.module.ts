import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipsComponent } from './internships/internships.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path:'',redirectTo:'/projects', pathMatch:'full'},
  {path:'skills',component: SkillsComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'internships',component: InternshipsComponent},
  {path:'certificates',component: CertificatesComponent},
  {path:'**',component: ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
