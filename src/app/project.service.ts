import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable()
export class ProjectService{
    projects=[]
    project0:Project;
    project1:Project;
    project2:Project;
    project3:Project;
    project4:Project;
    project5:Project;
    

    constructor(){
        this.project0=new Project('ANGULAR JS','ONLINE PROFILE','https://github.com/aryak0512/ProfileApp.git','Single Page web application using Angular JS. Created an online profile app using basics of componenets and OOPM concepts. Implemented routing and Injectioning');
        this.project1=new Project('J2EE TECHNOLOGIES','ATTENDANCE MANAGER','https://github.com/aryak0512/AttendanceManager.git','One can easily create an account on this portal and add/delete/update subjects and attendance regularly. A report card is generated for the user, telling him if he is a defaulter or not.');
        this.project2=new Project('SPRING MVC','PATIENT MANAGER WITH INCOME TRACKER','https://github.com/aryak0512/PatientManager.git','A patient manager system with income tracker, that has automatic SMS generator for patients with pending dues. Used Google charts API for income, loss analysis.');
        this.project3=new Project('J2EE TECHNOLOGIES','MOVIE BOOKING SYSTEM','https://github.com/aryak0512/MovieBooking.git','This Moving Booking Portal is designed by me using J2EE technologies. I plan to add a recommendation system to it soon. It has JavaMail API to send automatic booking confirmation email to the user.');
        this.project4=new Project('J2EE TECHNOLOGIES','PERSONAL ART WEBSITE','https://github.com/aryak0512/MyArtWebsite.git','Created a website for myself this quarantine to display my artworks, pictures clicked by me and memes. Developed using JSP, CSS, JSTL as front-end technologies and Servlet, JDBC and Java, MySQL database.');
        this.project5=new Project('SPRING MVC (ongoing)','BANK PORTAL','https://github.com/aryak0512/BankPortal.git','Already developed in J2EE, I plan to change configurations to Spring MVC. This is an online portal for banking executives to feed customer data and manage deposits/withdrawals/statements');
       
        this.projects.push(this.project0);
        this.projects.push(this.project4);
        
        this.projects.push(this.project2);
        this.projects.push(this.project3);
        this.projects.push(this.project5);
        this.projects.push(this.project1);
        
        
    }


    getProject():Project[]{
        return this.projects;
    }


}