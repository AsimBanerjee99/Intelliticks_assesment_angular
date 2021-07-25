import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})


export class PropertyServiceService {
  
  
  
  public base:string = "http://localhost:3000/records"; 
  
  constructor( private http:HttpClient) { }
  
  
  viewListedFunction(){
    return this.http.get(this.base);
  }

  storeData(data:any) {
    return this.http.post<any>(this.base, data);

  }

  deleteData(id:any){
    return this.http.delete<any>(this.base + '/'+ id);
  }
}
