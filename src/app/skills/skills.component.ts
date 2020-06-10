import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  basic_skills=[]
  intermediate_skills=[]
  constructor(skillsSerice:SkillService) { 
    this.basic_skills=skillsSerice.getBasicSkills();
    this.intermediate_skills=skillsSerice.getIntermediateSkills();

  }

  ngOnInit(): void {
  }

}
