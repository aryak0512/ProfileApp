import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates=[]
  constructor(certificateService:CertificateService) { 
    this.certificates=certificateService.getCertificates();

  }

  ngOnInit(): void {
    
  }

}
