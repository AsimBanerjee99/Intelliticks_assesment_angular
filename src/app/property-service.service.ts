import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})


export class PropertyServiceService {
  
  
  constructor( private http:HttpClient) { }
  

  public base:string = "https://api.airtable.com/v0/YOUR-AIRTABLE-BASE-ID/Table%201";
  
  public httpHeader = new HttpHeaders ({
    'Authorization': 'Bearer YOUR-AIRTABLE-API-KEY',
    'Content-Type': 'application/json'
  });

  
  viewListedFunction(){
    
    return this.http.get(this.base, {headers: this.httpHeader});
  }

  storeData(data:any) {
    return this.http.post<any>(this.base, data, {headers: this.httpHeader});

  }

  deleteData(id:any){
    return this.http.delete<any>(this.base + '/'+ id, {headers: this.httpHeader});
  }
}
