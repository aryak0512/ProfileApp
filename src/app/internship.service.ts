import { Internship } from './internship.model'
import { Injectable } from '@angular/core';

@Injectable()
export class InternshipService{
    internships=[]

    internship1:Internship;
    internship2:Internship;
    constructor(){
        this.internship1=new Internship('2nd February 2020','29th May 2020','Techskills','J2EE and Spring Framework');
        this.internship2=new Internship('13th December 2019','10th January 2020','Crux Digital Pvt. Ltd.','Poker game algorithm using Python');
        this.internships.push(this.internship1);
        this.internships.push(this.internship2);
    }


    getInternships():Internship[]{
        return this.internships;

    }
}