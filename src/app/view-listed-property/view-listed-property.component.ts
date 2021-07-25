import { Component, OnInit } from '@angular/core';

import {PropertyServiceService} from '../property-service.service';

@Component({
  selector: 'app-view-listed-property',
  templateUrl: './view-listed-property.component.html',
  styleUrls: ['./view-listed-property.component.css']
})
export class ViewListedPropertyComponent implements OnInit {

  public listOfProperty:any = [];

  constructor(private property_service_service:PropertyServiceService) { }

  ngOnInit(): void {
    this.fetchAllProperty()

  }

  fetchAllProperty(){
    this.property_service_service.viewListedFunction().subscribe(
      (data)=>{
        this.listOfProperty = data;
      }
    )
  }

  deleteProperty(id:any) {    
    this.property_service_service.deleteData(id).subscribe(
      data => {
        this.fetchAllProperty();
      }
    );

  }

}
