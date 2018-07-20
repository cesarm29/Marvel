import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from '../common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private newService :CommonService, private router: Router) { }

  ngOnInit() {
  }
 //function save in mongodb
  onSave = function(user) {   
  this.newService.saveUser(user)  
  .subscribe(data =>  {  
  	  alert(data.data);
  	  //name storage local
      localStorage.setItem('name', user.name);
      //email storage local
      localStorage.setItem('email', user.email); 
  	  //redireccion a home
      this.router.navigate(["/characters"]);    
  }   
  , error => this.errorMessage = error )  
    
}


}
