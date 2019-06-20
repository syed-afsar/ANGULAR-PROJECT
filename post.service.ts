import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getpost(){
    this.http.get('https://api.github.com/users').subscribe(response => {
      console.log('data typicode', response);
    } )
  }
}
