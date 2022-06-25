import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  data(val:any){
    return val
  }
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://www.postman.com/collections/9e1075da1dc1b06025cc')
  }
}
