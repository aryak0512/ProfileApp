import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';
import { CertificateService } from './certificate.service';
import { LogoComponent } from './logo/logo.component';

import { CertificatesComponent } from './certificates/certificates.component';
import { InfoComponent } from './info/info.component';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipService } from './internship.service';

import { SkillsComponent } from './skills/skills.component';
import { SkillService } from './skills.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    LogoComponent,
    CertificatesComponent,
    InfoComponent,
    InternshipsComponent,
    SkillsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectService,CertificateService, InternshipService,SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
