import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://neisiali.ir/api"

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl + '/posts')
  }

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/categories')
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/posts/0', post)
  }

  ngOnInit(): void {
      
  }
}
