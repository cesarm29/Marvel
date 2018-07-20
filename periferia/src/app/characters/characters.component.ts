import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Http, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as CryptoJS from 'crypto-js';
import {CommonService} from '../common.service';  

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
 // se realiza division de consultas por problemas en la api al tratar de tomar todos los personajes en una lista por datos faltantes
  charactersMarvelJson1: any = [];
  charactersMarvelJson2: any = [];
  charactersMarvelJson3: any = [];
  charactersMarvelJson4: any = [];
  charactersMarvelJson5: any = [];
  charactersMarvelJson6: any = [];
  concatItems: any = [] ;

  constructor(private newService :CommonService,private http: HttpClient, private router: Router) { }

  ngOnInit() {
   //get data user local storage
   var name = localStorage.getItem("name");  
   var email = localStorage.getItem("email");
   //get data 
   this.getCharactersMarvel1();
   this.getCharactersMarvel2();
   this.getCharactersMarvel3();
   this.getCharactersMarvel4();
   this.getCharactersMarvel5();
   this.getCharactersMarvel6();
  }
  //obtain characters marvel api
    getCharactersMarvel1(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=Hulk&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson1 = data;
	      console.log(this.charactersMarvelJson1);
	    });
	  }

      getCharactersMarvel2(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=Spider-Man&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson2 = data;
	      console.log(this.charactersMarvelJson2);
	    });
	  }

      getCharactersMarvel3(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=wolverine&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson3 = data;
	      console.log(this.charactersMarvelJson3);
	    });
	  }

      getCharactersMarvel4(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=Iron%20Man&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson4 = data;
	      console.log(this.charactersMarvelJson4);
	    });
	  }

      getCharactersMarvel5(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=Captain%20America&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson5 = data;
	      console.log(this.charactersMarvelJson5);
	    });
	  }

      getCharactersMarvel6(){
	      //params
	      let params = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
				params.set('orderBy', 'name');
				params.set('limit', '6');
				params.set('apikey', '9d371060c5ca4bafd6765bff8f996fbe');
		  //vars need to api to response to get data
		  var PRIV_KEY = '95eb485d3e39916f13bbf0ba85aca01ba0e054e6';
		  var PUBLIC_KEY = '9d371060c5ca4bafd6765bff8f996fbe';	
		  // you need a new ts every request                                                                                    
		  var ts = new Date().getTime();
		  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();		
		 //service
	    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts='+ts+'&name=Thor&orderBy=name&limit=1&apikey=9d371060c5ca4bafd6765bff8f996fbe&hash='+hash+'', {headers: params}).subscribe(data => {           
	      this.charactersMarvelJson6 = data;
	      console.log(this.charactersMarvelJson6);
	    });
	  }

	  //function save item in mongodb
		  onItemSave = function(nameCharacter,link) {
		  this.concatItems = { user : localStorage.getItem("name") , email : localStorage.getItem("email") , nameCharacter : nameCharacter , link : link };
		  this.newService.saveItem(this.concatItems)  
		  .subscribe(data =>  {  
		  	  alert(data.data);  
		  }   
		  , error => this.errorMessage = error )  		    
		}


}
