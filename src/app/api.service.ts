import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  array:any[] = [];
  url:string = 'http://cpd.iesgrancapitan.org:9123/profesores/121/partes';
  constructor() { }
  
  getData(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, true);
    let fuera = this;
    xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 400){
        fuera.array = JSON.parse(xhr.response);
        console.log(fuera.array);
      }else{
        console.log("Error")
      }
    }
    xhr.onerror = function(){
      console.log("Error2");
    }
    xhr.send();
  }
}
