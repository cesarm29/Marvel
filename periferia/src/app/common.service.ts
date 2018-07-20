import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  //service to mongodb save user
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
            .map((response: Response) =>response.json())              
  }

  //service to mongodb save item
  saveItem(item){      
    return this.http.post('http://localhost:8080/api/SaveItem/', item)  
            .map((response: Response) =>response.json())              
  }  
    
} 
