import { Certificate } from './certificate.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CertificateService{
    certificates=[]
    c1:Certificate;
    c2:Certificate;
    c3:Certificate;
    

    constructor(){
        this.c1=new Certificate('UC Davis','SQL for Data Science','https://www.coursera.org/account/accomplishments/records/ANSTE4EKMQE7?utm_medium=certificate&utm_source=ln&utm_campaign=sharebutton_course&utm_user=ceadec21f0357c55a3373de8c9fe8f2764469305','');
        this.c2=new Certificate('Learn Quest','Cloud Computing Basics','https://www.coursera.org/account/accomplishments/records/8D6AHS8WFHQB?utm_medium=certificate&utm_source=ln&utm_campaign=sharebutton_course&utm_user=ceadec21f0357c55a3373de8c9fe8f2764469305','');
        this.c3=new Certificate('Google','IT Support Fundamentals','https://www.coursera.org/account/accomplishments/records/DCNQPEKVAEMT?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharebutton_course&utm_user=ceadec21f0357c55a3373de8c9fe8f2764469305','');
        this.certificates.push(this.c1);
        this.certificates.push(this.c2);
        this.certificates.push(this.c3);
        
    }


    getCertificates():Certificate[]{
        return this.certificates;
    }


}