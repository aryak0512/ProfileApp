import { Skill } from './skill.model';
import { Injectable } from '@angular/core';
@Injectable()
export class SkillService{

    skill1:Skill;
    skill2:Skill;
    skill3:Skill;
    skill4:Skill;
    skill5:Skill;
    skill6:Skill;
    skill7:Skill;
    skill8:Skill;
    skill9:Skill;
    basic_skills=[]
    intermediate_skills=[]
    constructor(){
        this.skill1=new Skill("BASIC","SPRING MVC");
        this.skill2=new Skill("BASIC","ANGULAR");
        this.skill3=new Skill("BASIC","DATA STRUCTURES");
        this.skill4=new Skill("BASIC","PYTHON PROGRAMMING");
        this.skill5=new Skill("BASIC","C LANGUAGE");
        this.skill6=new Skill("INTERMEDIATE","SERVLETS, JSPS, JSTL");
        this.skill7=new Skill("INTERMEDIATE","JAVA PROGRAMMING");
        this.skill8=new Skill("INTERMEDIATE","HTML/CSS/JAVASCRIPT");
        this.skill9=new Skill("INTERMEDIATE","SQL AND DATABASES");
        this.basic_skills.push(this.skill1);
        this.basic_skills.push(this.skill2);
        this.basic_skills.push(this.skill3);
        this.basic_skills.push(this.skill4);
        this.basic_skills.push(this.skill5);
        this.intermediate_skills.push(this.skill6);
        this.intermediate_skills.push(this.skill7);
        this.intermediate_skills.push(this.skill8);
        this.intermediate_skills.push(this.skill9);
    }


    getBasicSkills():Skill[]{
        return this.basic_skills;
    }

    getIntermediateSkills():Skill[]{
        return this.intermediate_skills;
    }
}