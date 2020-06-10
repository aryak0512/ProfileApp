import { Component, OnInit } from '@angular/core';
import { InternshipService } from '../internship.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  internships=[]
  constructor(internshipSerice:InternshipService) { 
    this.internships=internshipSerice.getInternships();

  }

  ngOnInit(): void {
  }

}
