import { Component, OnInit } from '@angular/core';

import {PropertyServiceService} from '../property-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  public formData = {
    fields: {
      Property_name : "",
      Size : "",
      Descriptions : ""
    },
    typecast: true
  };
  public listOfProperty:any = [];
  constructor(private property_service_service:PropertyServiceService, private router:Router) { }

  

  ngOnInit(): void {
  }

  collectData() {
    this.property_service_service.viewListedFunction().subscribe(
      (data)=>{
        this.listOfProperty = data;        
        this.property_service_service.storeData(this.formData).subscribe();
        this.router.navigate(['/']);
      }
    );
    
  }

}
